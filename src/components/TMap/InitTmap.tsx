import { useEffect, useState } from "react";

interface MapComponentProps {
  UserLat: number;
  UserLong: number;
  RoadStartLat: number;
  RoadEndLat: number;
  RoadStartLong: number;
  RoadEndLong: number;
}

const TMAP_API_KEY = import.meta.env.VITE_TMAP_API_KEY;

export const MapComponent = (props: MapComponentProps) => {
  const [userLat, setUserLat] = useState<number>(0);
  const [userLong, setUserLong] = useState<number>(0);
  const [roadStartLat, setRoadStartLat] = useState<number>(0);
  const [roadEndLat, setRoadEndLat] = useState<number>(0);
  const [roadStartLong, setRoadStartLong] = useState<number>(0);
  const [roadEndLong, setRoadEndLong] = useState<number>(0);

  const executeScript = () => {
    // alert("executeScript");
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`
      var map;
      var marker_s, marker_e, marker_p1, marker_p2;
      var totalMarkerArr = [];
      var drawInfoArr = [];
      var resultdrawArr = [];
    
      map = new window.Tmapv2.Map("map_div" , {
        center: new window.Tmapv2.LatLng(${userLat}, ${userLong}), // 지도 초기 좌표
        width: "363px",
        height: "501px",
        zoom: 14
      });
      
      marker_s = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(${roadStartLat}, ${roadStartLong}),
          icon: "/upload/tmap/marker/pin_r_m_s.png",
          iconSize: new Tmapv2.Size(24, 38),
          map: map
      });

      // 도착
      marker_e = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(${roadEndLat}, ${roadEndLong}),
          icon: "/upload/tmap/marker/pin_r_m_e.png",
          iconSize: new Tmapv2.Size(24, 38),
          map: map
      });

      fetch("https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "appKey": "${TMAP_API_KEY}",
        },
        body: JSON.stringify({
          "startX": "${roadStartLong}",
          "startY": "${roadStartLat}",
          "endX": "${roadEndLong}",
          "endY": "${roadEndLat}",
          "reqCoordType": "WGS84GEO",
          "resCoordType": "EPSG3857",
          "startName": "출발지",
          "endName": "도착지"
        })
      })
      .then(res => res.json())
      .then(data => {
        var resultData = data.features;

        //결과 출력
        var tDistance = "총 거리 : " + (resultData[0].properties.totalDistance / 1000).toFixed(1) + "km,";
        var tTime = " 총 시간 : " + (resultData[0].properties.totalTime / 60).toFixed(0) + "분";

        var resultElement = document.getElementById("map_result");
        resultElement.textContent = tDistance + tTime;

        //기존 그려진 라인 & 마커가 있다면 초기화
        if (resultdrawArr.length > 0) {
            for (var i in resultdrawArr) {
                resultdrawArr[i].setMap(null);
            }
            resultdrawArr = [];
        }

        drawInfoArr = [];

        for (var i in resultData) {
            var geometry = resultData[i].geometry;
            var properties = resultData[i].properties;

            if (geometry.type == "LineString") {
                for (var j in geometry.coordinates) {
                    // 경로들의 결과값(구간)들을 포인트 객체로 변환
                    var latlng = new Tmapv2.Point(geometry.coordinates[j][0], geometry.coordinates[j][1]);
                    // 포인트 객체를 받아 좌표값으로 변환
                    var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
                    // 포인트객체의 정보로 좌표값 변환 객체로 저장
                    var convertChange = new Tmapv2.LatLng(convertPoint._lat, convertPoint._lng);
                    // 배열에 담기
                    drawInfoArr.push(convertChange);
                }
            } else {
                var markerImg = "";
                var pType = "";
                var size;

                if (properties.pointType == "S") { //출발지 마커
                    markerImg = "/upload/tmap/marker/pin_r_m_s.png";
                    pType = "S";
                    size = new Tmapv2.Size(24, 38);
                } else if (properties.pointType == "E") { //도착지 마커
                    markerImg = "/upload/tmap/marker/pin_r_m_e.png";
                    pType = "E";
                    size = new Tmapv2.Size(24, 38);
                } else { //각 포인트 마커
                    markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
                    pType = "P";
                    size = new Tmapv2.Size(8, 8);
                }

                // 경로들의 결과값들을 포인트 객체로 변환
                var latlon = new Tmapv2.Point(geometry.coordinates[0], geometry.coordinates[1]);

                // 포인트 객체를 받아 좌표값으로 다시 변환
                var convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlon);

                var routeInfoObj = {
                    markerImage: markerImg,
                    lng: convertPoint._lng,
                    lat: convertPoint._lat,
                    pointType: pType
                };

                // Marker 추가
                marker_p = new Tmapv2.Marker({
                    position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
                    icon: routeInfoObj.markerImage,
                    iconSize: size,
                    map: map
                });
            }
        }
        drawLine(drawInfoArr);
      })
      .catch(error => console.error("!!!!Error: ", error));
    
      function addComma(num) {
          var regexp = /\\B(?=(\\d{3})+(?!\\d))/g;
          return num.toString().replace(regexp, ',');
      }

      function drawLine(arrPoint) {
          var polyline_;

          polyline_ = new Tmapv2.Polyline({
              path: arrPoint,
              strokeColor: "#DD0000",
              strokeWeight: 6,
              map: map
          });
          resultdrawArr.push(polyline_);
      }
    `);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const InstallScript = () => {
    (function () {
      // alert("installScript");
      var _nu = Math.floor(Math.random() * (3 - 1 + 1) + 1);
      var domian = "topopentile1";
      if (_nu == 1) {
        domian = "topopentile1";
      } else if (_nu == 2) {
        domian = "topopentile2";
      } else {
        domian = "topopentile3";
      }
      var a = typeof Tmapv2 == "object" && Tmapv2.singleFile;
      var c = window.Tmapv2;
      window.Tmapv2 = {
        _getScriptLocation: function () {
          return "https://" + domian + ".tmap.co.kr/scriptSDKV2/";
        },
        VERSION_NUMBER: Math.random(),
      };
      if (!a) {
        if (!c) {
          c = ["tmapjs2.min.js?version=20231206"];
        }
        var d = new Array(c.length);
        var e = Tmapv2._getScriptLocation();
        for (var f = 0, g = c.length; f < g; f++) {
          d[f] = e + c[f];
        }

        if (d.length > 0) {
          d.forEach((src) => {
            const scriptTag = document.createElement("script");
            scriptTag.src = src;
            document.body.append(scriptTag);
            scriptTag.onload = () => {
              executeScript();
            };
          });
        }
      }
    })();
  };

  useEffect(() => {
    if (userLat !== 0 && userLong !== 0) InstallScript();
  }, [userLat, userLong]);
  useEffect(() => {
    setUserLat(props.UserLat);
    setUserLong(props.UserLong);
    setRoadStartLat(props.RoadStartLat);
    setRoadEndLat(props.RoadEndLat);
    setRoadStartLong(props.RoadStartLong);
    setRoadEndLong(props.RoadEndLong);
  }, [props]);

  return (
    <>
      <div id="map_div" className="inline-block" />
      <div id="map_result" className="inline-block" />
    </>
  );
};

import { useEffect, useRef, useState } from "react";
import { handleWalkRoadRoute } from "../../hooks/useTmapApi.ts";
import {
  FeatureCollection,
  Geometry,
  Properties,
  RouteInfo,
} from "../../types/walkRoadRoute.ts";
import { useNavigate } from "react-router-dom";
import { WalkRoadType } from "../../types/walkRoad.ts";

interface MapComponentProps {
  UserLat: number;
  UserLong: number;
  WalkRoadTypeList: WalkRoadType[];
}

declare global {
  interface Window {
    Tmapv2: any;
  }
}

export const MapComponent = (props: MapComponentProps) => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any | null>(null);
  const [userLat, setUserLat] = useState<number>(0);
  const [userLong, setUserLong] = useState<number>(0);
  const [walkRoadTypeList, setWalkRoadTypeList] = useState<WalkRoadType[]>([]);
  const [featureCollection, setFeatureCollection] = useState<
    FeatureCollection[]
  >([]);
  const { Tmapv2 } = window;

  const initializeMap = () => {
    if (userLat === 0 || userLong === 0 || !mapRef.current || map) return;

    const initializedMap = new window.Tmapv2.Map(mapRef.current, {
      center: new window.Tmapv2.LatLng(userLat, userLong),
      width: "363px",
      height: "501px",
      zoom: 14,
      zoomControl: true,
      scrollWheel: true,
    });

    setMap(initializedMap);
  };

  const loadTmapScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://topopentile1.tmap.co.kr/scriptSDKV2/tmapjs2.min.js?version=20231206";
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  };

  const handleRoutes = async () => {
    try {
      const tempResult: FeatureCollection[] = [];
      for (const road of walkRoadTypeList) {
        const response = await handleWalkRoadRoute(road);
        response.road = road;
        tempResult.push(response);
      }
      setFeatureCollection(tempResult);
    } catch (error) {
      console.error("TMap API 정보를 처리하지 못 했습니다. : ", error);
      alert("TMap API 정보를 처리하지 못 했습니다.");
    }
  };

  const drawLine = (arrPoint: any[]) => {
    new Tmapv2.Polyline({
      path: arrPoint,
      strokeColor: "#DD0000",
      strokeWeight: 6,
      map: map,
    });
  };

  useEffect(() => {
    if (!window.Tmapv2) loadTmapScript();
    else initializeMap();
  }, [userLat, userLong]);

  useEffect(() => {
    if (!(walkRoadTypeList.length !== 0 && map)) return;

    const totalMarkerArr = [];
    const markers: any[] = [];

    featureCollection.map((featureCollection) => {
      const label =
        "<span style='background-color: #46414E;color:white'>" +
        featureCollection.road.name +
        "</span>";
      const title =
        "총 거리 : " +
        // @ts-ignore
        (featureCollection.features[0].properties.totalDistance / 1000).toFixed(
          1,
        ) +
        "km, " +
        "총 시간 : " +
        // @ts-ignore
        (featureCollection.features[0].properties.totalTime / 60).toFixed(0) +
        "분";

      const marker_s = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(
          featureCollection.road.startLat,
          featureCollection.road.startLong,
        ),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
        iconSize: new Tmapv2.Size(24, 38),
        title: title,
        label: label,
        map: map,
      });
      const marker_e = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(
          featureCollection.road.endLat,
          featureCollection.road.endLong,
        ),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
        iconSize: new Tmapv2.Size(24, 38),
        title: title,
        label: label,
        map: map,
      });

      marker_s.addListener("click", function () {
        navigate(`/trail/${featureCollection.road.id}/review`);
      });
      marker_e.addListener("click", function () {
        navigate(`/trail/${featureCollection.road.id}/review`);
      });

      markers.push(marker_s);
      markers.push(marker_e);

      const drawInfoArr: any[] = [];
      featureCollection.features.map((feature) => {
        const geometry: Geometry = feature.geometry;
        const properties: Properties = feature.properties;

        if (geometry.type === "LineString") {
          geometry.coordinates.map((coordinates) => {
            // @ts-ignore
            const latLng = new Tmapv2.Point(coordinates[0], coordinates[1]);
            const convertPoint =
              new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latLng);
            const convertChange = new Tmapv2.LatLng(
              convertPoint._lat,
              convertPoint._lng,
            );
            drawInfoArr.push(convertChange);
          });
        } else {
          let markerImg = "";
          let pType = "";
          let size;

          if (properties.pointType === "S") {
            markerImg =
              "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
            pType = "S";
            size = new Tmapv2.Size(24, 38);
          } else if (properties.pointType === "E") {
            markerImg =
              "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
            pType = "E";
            size = new Tmapv2.Size(24, 38);
          } else {
            markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
            pType = "P";
            size = new Tmapv2.Size(8, 8);
          }
          const latlon = new Tmapv2.Point(
            geometry.coordinates[0],
            geometry.coordinates[1],
          );
          const convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
            latlon,
          );

          const routeInfoObj: RouteInfo = {
            markerImage: markerImg,
            lng: convertPoint._lng,
            lat: convertPoint._lat,
            pointType: pType,
          };

          const marker_p = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
            icon: routeInfoObj.markerImage,
            iconSize: size,
            map: map,
          });

          totalMarkerArr.push(marker_p);
        }
      });
      drawLine(drawInfoArr);
    });
  }, [map, featureCollection]);

  useEffect(() => {
    setUserLat(props.UserLat);
    setUserLong(props.UserLong);
    setWalkRoadTypeList(props.WalkRoadTypeList);
  }, [props]);

  useEffect(() => {
    handleRoutes();
  }, [walkRoadTypeList]);

  return (
    <>
      {userLat !== 0 && userLong !== 0 ? (
        <>
          <div ref={mapRef} className="inline-block" />
          <h1 id="result" />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

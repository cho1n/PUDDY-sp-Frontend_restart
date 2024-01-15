import home from "../../../assets/NavIcon/default/home.svg";
import message from "../../../assets/NavIcon/default/message.svg";
import myPage from "../../../assets/NavIcon/default/myPage.svg";
import map from "../../../assets/NavIcon/default/map.svg";
import community from "../../../assets/NavIcon/default/community.svg";
import home_click from "../../../assets/NavIcon/click/home_click.svg";
import message_click from "../../../assets/NavIcon/click/message_click.svg";
import myPage_click from "../../../assets/NavIcon/click/myPage_click.svg";
import map_click from "../../../assets/NavIcon/click/map_click.svg";
import community_click from "../../../assets/NavIcon/click/community_click.svg";

import useNavStore from "../../../store/useNavstore";

export const FooterNav = () => {
  const [navMode, selectMode] = useNavStore((state) => [
    state.navMode,
    state.selectMode,
  ]);

  return (
    <div className="h-auto min-h-full pb-10">
      <ul className="flex justify-between items-center bg-white">
        <li className="pr-3.75">
          <a href="" onClick={() => selectMode("0")}>
            {navMode == "0" ? (
              <img src={home_click} className="w-10 h-10" alt="Home_click" />
            ) : (
              <img src={home} className="w-10 h-10" alt="Home" />
            )}
          </a>
        </li>
        <li className="pr-3.75">
          <a href="" onClick={() => selectMode("1")}>
            {navMode == "1" ? (
              <img
                src={message_click}
                className="w-10 h-10"
                alt="message_click"
              />
            ) : (
              <img src={message} className="w-10 h-10" alt="message" />
            )}
          </a>
        </li>
        <li className="pr-3.75">
          <a href="" onClick={() => selectMode("2")}>
            {navMode == "2" ? (
              <img
                src={community_click}
                className="w-10 h-10"
                alt="community_click"
              />
            ) : (
              <img src={community} className="w-10 h-10" alt="community" />
            )}
          </a>
        </li>
        <li className="pr-3.75">
          <a href="" onClick={() => selectMode("3")}>
            {navMode == "3" ? (
              <img src={map_click} className="w-10 h-10" alt="map_click" />
            ) : (
              <img src={map} className="w-10 h-10" alt="map" />
            )}
          </a>
        </li>
        <li className="pr-3.75">
          <a href="" onClick={() => selectMode("4")}>
            {navMode == "4" ? (
              <img
                src={myPage_click}
                className="w-10 h-10"
                alt="myPage_click"
              />
            ) : (
              <img src={myPage} className="w-10 h-10" alt="myPage_click" />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
};

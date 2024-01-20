import Slider from "react-slick";
import { MatchListType } from "../../../types/match";
import { ShowMatch } from "./ShowMatch";
export const MatchSlider = (props: MatchListType) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (index: number) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };
  const matches = props.pets?.map((match, index) => (
    <ShowMatch key={index} {...match} />
  ));
  return <Slider {...settings}>{matches}</Slider>;
};

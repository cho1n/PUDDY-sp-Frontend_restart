import { MatchListType } from "../../types/match";
import { MatchSlider } from "../common/slider/MatchSlider";
interface MatchTemplateProps {
  matchListValue: MatchListType;
}
export const MatchTemplate = (props: MatchTemplateProps) => {
  return (
    <div className="w-full h-haveHeaderAndFooter px-4">
      <MatchSlider pets={props.matchListValue.pets} />
    </div>
  );
};

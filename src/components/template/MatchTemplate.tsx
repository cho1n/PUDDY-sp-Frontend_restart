import { MatchSlider } from "../common/slider/MatchSlider";
interface MatchTemplateProps {
  handleMatchCancel: () => void;
  handlepostMatch: (personId: number) => void;
}
export const MatchTemplate = (props: MatchTemplateProps) => {
  return (
    <div className="w-full h-haveHeaderAndFooter px-4">
      <MatchSlider
        handleMatchCancel={props.handleMatchCancel}
        handlepostMatch={props.handlepostMatch}
      />
    </div>
  );
};

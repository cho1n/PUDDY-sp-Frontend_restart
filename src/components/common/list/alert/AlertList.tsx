import { AlertListType } from "../../../../types/alert";
import { Alert } from "./alert";

interface AlertListProps extends AlertListType {
  goToProfile: (personId: number) => void;
}

export const AlertList = (props: AlertListProps) => {
  return (
    <div className="w-full grid grid-cols-1">
      <div className="w-full border-b-2" />
      {props.matches.map((match, index) => (
        <Alert key={index} {...match} goToProfile={props.goToProfile} />
      ))}
    </div>
  );
};

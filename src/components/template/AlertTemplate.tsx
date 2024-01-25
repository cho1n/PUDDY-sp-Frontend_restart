import { AlertListType } from "../../types/alert";
import { AlertList } from "../common/list/alert/AlertList";

interface AlertTemplateProps {
  alertValue: AlertListType;
  goToProfile: (personId: number) => void;
}
export const AlertTemplate = (props: AlertTemplateProps) => {
  return (
    <div className=" flex-col px-4 w-full max-h-haveHeader overflow-auto scrollbar-hide">
      <AlertList {...props.alertValue} goToProfile={props.goToProfile} />
    </div>
  );
};

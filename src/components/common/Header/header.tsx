import { arrow, alert, filter } from "../../../assets/Header";
import { useHeader } from "../../../hooks/useHeader";
interface Title {
  title: string;
}

export const Header = (titleObject: Title) => {
  const { handleAlert, handleBack } = useHeader();

  return (
    <div className="flex px-4 w-full h-16 px-1 py-2 items-center gap-1 shrink-0">
      {titleObject.title !== "강아지 매칭" && (
        <div className="flex justify-center items-center gap-2.5 ">
          <div
            className="flex justify-center items-center gap-2.5"
            onClick={() => handleBack()}
          >
            <img src={arrow} className="w-6 h-6" alt="arrow" />
          </div>
        </div>
      )}
      <p className="flex flex-1 items-center h-6 leading-7 font-normal text-bigTitle text-left">
        {titleObject.title}
      </p>
      {titleObject.title === "강아지 매칭" && (
        <>
          <div className="flex justify-center items-center px-2 gap-2.5">
            <img src={filter} className="w-6 h-6" alt="filter" />
          </div>
          <div
            className="flex justify-center items-center gap-2.5"
            onClick={() => handleAlert()}
          >
            <img src={alert} className="w-6 h-6" alt="alert" />
          </div>
        </>
      )}
    </div>
  );
};

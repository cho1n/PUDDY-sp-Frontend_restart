import arrow from "../../../assets/Header/arrow_back.svg";

interface Title {
  title: string;
}

export const Header = (titleObject: Title) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex w-full h-16 px-1 py-2 items-center gap-1 shrink-0">
      <div className="flex justify-center items-center gap-2.5 ">
        <div
          className="flex p-2 justify-center items-center gap-2.5"
          onClick={() => handleBack()}
        >
          <img src={arrow} className="w-6 h-6" alt="arrow" />
        </div>
      </div>
      <p className="flex-1 h-6 leading-7 font-normal text-2xl text-left">
        {titleObject.title}
      </p>
    </div>
  );
};

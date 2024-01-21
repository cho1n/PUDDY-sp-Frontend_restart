export const MyPageTemplate = () => {
  return (
    <div className="flex flex-col items-center w-f bg-bgWhite mt-2.5">
      <div className="flex flex-col items-center w-f h-24 mt-2.5">
        {/* <img className="rounded-full"> </img> */}
        <p className="text-fontBlack text-2xl">님</p>
      </div>
      <div className="flex flex-col items-center w-64 h-12 mt-2.5">
        <p className="text-fontBlack text-2xl">이메일</p>
        <p className="text-fontBlack text-2xl">전화번호</p>
      </div>
      <div className="flex flex-col items-center w-64 h-12 mt-2.5">
        <p className="text-fontBlack text-2xl">주소</p>
      </div>
      <div className="flex flex-col items-center w-64 h-12 mt-2.5">
        <p className="text-fontBlack text-2xl">비밀번호 변경</p>
      </div>
      <div className="flex flex-col items-center w-64 h-12 mt-2.5">
        <p className="text-fontBlack text-2xl">회원탈퇴</p>
      </div>
    </div>
  );
};

import { Layout } from "../components/common/layout/Layout";
import { UserProfileUpdateTemplate } from "../components/template";
import { useProfile } from "../hooks/useProfile";

export const UserProfileUpdatePage = () => {
    const {UpdateValue,
        checkPassword,
        dateValue,
        handleSignUpChange,
        handleCheckPassword,
        handleSignUpSelect,
        handleGenderCheck,
        handleUpdateProfile,
        handleCheckAddress} = useProfile(); 
  return (
    <Layout title={"프로필 수정"} showHeader={true} showFooter={false}>
      <UserProfileUpdateTemplate 
        UpdateValue={UpdateValue}
        checkPassword={checkPassword}
        dateValue={dateValue}
        onChange={handleSignUpChange}
        onPasswordCheck={handleCheckPassword}
        onSelect={handleSignUpSelect}
        onGenderCheck={handleGenderCheck}
        onClick={handleUpdateProfile}
        onAddressCheck={handleCheckAddress}
      />
    </Layout>
  );
};

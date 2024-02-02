import { Layout } from "../components/common/layout/Layout";
import { ChatTemplate } from "../components/template";

export const ChatPage = () => {
  return (
    <Layout title={"채팅"} showHeader={true} showFooter={false} >
      <ChatTemplate />
    </Layout>
  );
};

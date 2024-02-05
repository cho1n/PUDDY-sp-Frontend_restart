import { Layout } from "../components/common/layout/Layout";
import { useChat } from "../hooks/useChat";
import { ChatListTemplate } from "../components/template/ChatListTemplate";

export const ChatListPage = () => {
  const { chatListValue, goToProfile, enterChat } = useChat();

  return (
    <Layout title={"채팅방"} showHeader={true} showFooter={true}>
      <ChatListTemplate
        chatValue={chatListValue}
        goToProfile={goToProfile}
        enterChat={enterChat}
      />
    </Layout>
  );
};

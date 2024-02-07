import { Layout } from "../components/common/layout/Layout";
import { ChatTemplate } from "../components/template";
import { useMessage } from "../hooks/useMessage";

export const ChatPage = () => {
  const { chatDetailValue, sendMessage, handleInput, content } = useMessage();
  return (
    <Layout title={"채팅"} showHeader={true} showFooter={false}>
      <ChatTemplate
        chatDetailValue={chatDetailValue}
        sendMessage={sendMessage}
        handleInput={handleInput}
        content={content}
      />
    </Layout>
  );
};

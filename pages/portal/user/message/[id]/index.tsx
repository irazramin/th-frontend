import MessageList from "../../../../../features/message/MessageList";
import MessageBox from "../../../../../features/message/MessageBox";
import MessageEmptyState from "../../../../../features/message/MessageEmptyState";

const Message = () => {
  return (
    <>
      <MessageList>
        <MessageBox/>
      </MessageList>
    </>
  );
};

export default Message;

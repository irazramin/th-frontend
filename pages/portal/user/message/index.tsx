import MessageList from "../../../../features/message/MessageList";
import MessageEmptyState from "../../../../features/message/MessageEmptyState";

const Message = () => {
  return (
    <>
      <MessageList>
          <MessageEmptyState />
      </MessageList>
    </>
  );
};

export default Message;

import MessageList from "../../../../features/message/MessageList";
import MessageEmptyState from "../../../../features/message/MessageEmptyState";
import {DefaultCard} from "../../../../components/cards";

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

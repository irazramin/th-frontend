import MessageList from "../../../../features/message/MessageList";
import MessageEmptyState from "../../../../features/message/MessageEmptyState";
import {UserPortalLayout} from "../../../../layouts";

const Message = () => {
    return (
        <UserPortalLayout>
            <MessageList type="user">
                <MessageEmptyState/>
            </MessageList>
        </UserPortalLayout>
    );
};

export default Message;

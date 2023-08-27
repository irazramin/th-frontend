import MessageList from "../../../../../features/message/MessageList";
import MessageBox from "../../../../../features/message/MessageBox";
import {UserPortalLayout} from "../../../../../layouts";

const Message = () => {
    return (
        <UserPortalLayout>
            <MessageList type="user">
                <MessageBox/>
            </MessageList>
        </UserPortalLayout>
    );
};

export default Message;

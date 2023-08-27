import MessageList from "../../../../features/message/MessageList";
import MessageEmptyState from "../../../../features/message/MessageEmptyState";
import {EmployerPortalLayout} from "../../../../layouts";

const Message = () => {
    return (
        <EmployerPortalLayout>
            <MessageList type="employer">
                <MessageEmptyState/>
            </MessageList>
        </EmployerPortalLayout>
    );
};

export default Message;

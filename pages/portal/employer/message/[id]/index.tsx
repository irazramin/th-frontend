import MessageList from "../../../../../features/message/MessageList";
import MessageBox from "../../../../../features/message/MessageBox";
import {EmployerPortalLayout} from "../../../../../layouts";

const Message = () => {
    return (
        <EmployerPortalLayout>
            <MessageList type="employer">
                <MessageBox/>
            </MessageList>
        </EmployerPortalLayout>
    );
};

export default Message;

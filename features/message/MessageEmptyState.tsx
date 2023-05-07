import React from 'react';

const MessageList = ({children}: any) => {
    return (

        <div className='empty-msg'>
            <img src="/no-message.png" alt=""/>
            <p>Select a conversation for chatting!</p>
        </div>

    );
};

export default MessageList;

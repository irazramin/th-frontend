import React from 'react';

const MessageEmptyState = () => {
    return (

        <div className='empty-msg'>
            <img src="/no-message.png" alt=""/>
            <p>Select a conversation for chatting!</p>
        </div>

    );
};

export default MessageEmptyState;

import {UserPortalLayout} from "../../../../layouts";
import {TitleCard} from "../../../../components/cards";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPaperclip,
    faPaperPlane,
    faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useRef, useState} from "react";
import Conversation from "../../../../components/chat/Conversation";

const Message = () => {
    const [conversations, setConversation] = useState([]);
    const [messages, setMessages] = useState([]);
    const [rel, setRel] = useState([]);
    const [chatMessages, setChatMessages] = useState('');
    const [conversationId, setConversationId] = useState('');
    const scrollRef = useRef();
    const currentUser = '640f43a1a6df07568a20e29e';
    useEffect(() => {
        async function fetchConversationData() {
            fetch(`http://localhost:4000/api/v1/conversation`).then((res: Response) => res.json()).then((data: any) => setConversation(data));
        }

        fetchConversationData();
    }, [rel]);

    const handleChatClick = (id: any) => {
        fetch(`http://localhost:4000/api/v1/message/${id}`).then((res: Response) => res.json()).then(data => setMessages(data));
        setConversationId(id);
    }

    const handleMessageSubmit = (e: Event) => {
        const message = {
            conversationId: conversationId,
            senderId: currentUser,
            text: chatMessages
        }
        e.preventDefault();
        fetch(`http://localhost:4000/api/v1/message`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        }).then(res => res.json()).then((data: any) => {
            // @ts-ignore
            setMessages([...messages, data]);
            // @ts-ignore
            setRel(true);
            setChatMessages(' ');
        });
    }

    useEffect(() => {
        // @ts-ignore
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    // @ts-ignore
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Messages">
                </TitleCard>
                <section className='messages-section'>
                    <div className='chat-bar cards'>
                        <div>
                            <div className="chats-header">
                                <div className="header-top">
                                    <h2>Chats</h2>
                                    <button><FontAwesomeIcon icon={faPenToSquare} className='icon'/>
                                    </button>
                                </div>
                                <div className="chat-search">
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" placeholder="Search..."/>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="chats">
                                <ul>
                                    {conversations.map((con: any) => <Conversation conversation={con}
                                                                                   currentUser={currentUser}
                                                                                   handleChatClick={handleChatClick}/>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div ref={scrollRef} className='chat-section cards'>
                        <div className='chatbox-header'>
                            <div className='user-details'>
                                <div className="chat-img">
                                    <div className='active-status'/>
                                    <img
                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt=""/>
                                </div>
                                <div className="chat-name-status">
                                    <h4>Iraz Ramin</h4>
                                    <span> <FontAwesomeIcon icon={faCircle} className='icon'/> Active</span>
                                </div>
                            </div>
                            <div className='chat-tools'>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </div>
                        </div>
                        <div className="chat-box">
                            <div className="all-messages">
                                {
                                    messages.map((message: any) => {
                                        return (
                                            <div ref={scrollRef}>
                                                {message.senderId === currentUser ? <div className=" my-message">
                                                        <div className='user-details'>
                                                            <div className="chat-name-status">
                                                                <h4>me</h4>
                                                                <div className="messages">
                                                                    <div className="message">
                                                                        <p>{message.text}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div> :
                                                    <div className="opposite-message">
                                                        <div className='user-details'>
                                                            <div className="chat-img">
                                                                <div className='active-status'/>
                                                                <img
                                                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                    alt=""/>
                                                            </div>
                                                            <div className="chat-name-status">
                                                                <h4>me</h4>
                                                                <div className="messages">
                                                                    <div className="message">
                                                                        <p>{message.text}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="chatbox-footer">
                            <form action="#">
                                <div className="form-group">
                                    <input type="text" placeholder="write messages"/>
                                    <FontAwesomeIcon icon={faPaperPlane} className='icon send'/>
                                    <FontAwesomeIcon icon={faPaperclip} className='icon attachment'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </UserPortalLayout>
        </>
    );
}

export default Message

import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import {useRouter} from "next/router";

const MessageList = ({children}: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const {id} = router.query;

    const [isMounted, setIsMounted] = useState(false);
    const [messageList = {messages: []}, setMessageList]: any = useState([]);
    const [sendMessage, setSendMessage] = useState('');

    const [rel, setRel] = useState([]);
    const scrollRef = useRef();


    const {messages = {data: [], meta: null, time: ''}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        if (isMounted && messages.time) {
            setMessageList(messages.data);
        }
    }, [messages.time]);

    useEffect(() => {
        if (id) {
            fetchData();
            setIsMounted(true);
        }
    }, [id, sendMessage]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.messageMS(`api/v1/conversation/${id}`),
            storeName: 'messages',
            defaultValue: [],
            showToast: false
        }));
    };

    useEffect(() => {
        // @ts-ignore
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messageList]);

    const sendMessages = (e: any) => {
        e.preventDefault();
        const data = {
            message: sendMessage,
            conversationId: id,
            messageType: 'no'
        }
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.messageMS('api/v1/message'),
            storeName: 'sendMessage',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        setSendMessage('');
    }
    return (
        <>
            <div ref={scrollRef} className="chat-section cards">
                <div className="chatbox-header">
                    <div className="user-details">
                        <div className="chat-img">
                            <div className="active-status"/>
                            <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                            />
                        </div>
                        <div className="chat-name-status">
                            <h4>Iraz Ramin</h4>
                        </div>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="all-messages">
                        {messageList?.messages?.map((message: any) => {
                            return (
                                <div ref={scrollRef}>
                                    {message.senderId === '64500b7a7c81c868bb2249bb' ? (
                                        <div className=" my-message">
                                            <div className="user-details">
                                                <div className="chat-name-status">
                                                    <div className="messages">
                                                        <div className="message">
                                                            <p>{message.message}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="opposite-message">
                                            <div className="user-details">
                                                <div className="chat-img">
                                                    <div className="active-status"/>
                                                    <img
                                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="chat-name-status">
                                                    <h4>me</h4>
                                                    <div className="messages">
                                                        <div className="message">
                                                            <p>{message.message}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="chatbox-footer">
                    <form action="#" onSubmit={sendMessages}>
                        <div className="form-group">
                            <input type="text" placeholder="write messages" name='messagebox'
                                   onChange={(e: any) => setSendMessage(e.target.value)}/>
                            <button className="send">
                                <FontAwesomeIcon icon={faPaperPlane} className="icon "/>
                            </button>
                            <button className="attachment">
                                <FontAwesomeIcon icon={faPaperclip} className="icon "/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MessageList;

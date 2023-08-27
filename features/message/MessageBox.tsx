import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import {useRouter} from "next/router";
import {io} from "socket.io-client";
import Cookies from "js-cookie";

const Conversation = () => {

    const router = useRouter();
    const scrollRef: any = useRef();
    const dispatch = useDispatch<AppDispatch>();

    const [socket, setSocket]: any = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const [messages = [], setMessages]: any = useState([]);
    const [messageBody, setMessageBody] = useState('');

    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }

    const {conversation = {data: [], meta: null, time: ''}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        const socketIO = io('http://localhost:3038');
        setSocket(socketIO);
        return () => {
            socketIO.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!socket) return;

        socket.on('receiveMessage', ({message}: any) => {
            setMessages((prevMessages: any) => [...prevMessages, message]);
        });
    }, [socket]);

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length > 0) {
            setIsMounted(true);
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.messageMS(`api/v1/conversation/${id}`),
                storeName: 'conversation',
                defaultValue: [],
                showToast: false
            }));
        }
    }, [router?.query?.id]);


    useEffect(() => {
        if (isMounted && conversation.time) {
            setMessages(conversation?.data?.messages ?? []);
            socket.emit('subscribeConversation', router.query.id);
        }
    }, [conversation.time, isMounted]);

    useEffect(() => {
        if (messages.length) {
            scrollRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [messages]);

    const onSendMessage = (e: any) => {
        e.preventDefault();

        if (router?.query?.id) {
            const data = {
                message: messageBody,
                conversationId: router?.query?.id,
                messageType: 1
            }

            dispatch(callApi({
                method: HttpHethod.POST,
                url: UrlHelper.messageMS('api/v1/message'),
                storeName: 'sendMessage',
                body: data,
                defaultValue: null,
                showToast: false
            }));
        }

        scrollRef.current?.scrollIntoView({behavior: 'smooth'});

        setMessageBody(' ');
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
                        {messages?.map((message: any, messageIndex: number) => {
                            return (
                                <div ref={scrollRef} key={messageIndex}>
                                    {message?.senderId === (authUser?._id ?? null) ? (
                                        <div className=" my-message">
                                            <div className="user-details">
                                                <div className="chat-name-status">
                                                    <div className="messages">
                                                        <div className="message">
                                                            <p>{message?.message}</p>
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
                                                            <p>{message?.message}</p>
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
                    <form onSubmit={onSendMessage}>
                        <div className="form-group">
                            <input type="text" placeholder="Write your message" name="message"
                                   value={messageBody}
                                   onChange={(e: any) => setMessageBody(e.target.value)}/>
                            <button className="send">
                                <FontAwesomeIcon icon={faPaperPlane} className="icon "/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Conversation;

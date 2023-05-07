import React, {useEffect, useRef, useState} from 'react';
import {TitleCard} from '../../components/cards';
import {UserPortalLayout} from '../../layouts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import Link from "next/link";
import {useRouter} from "next/router";

const MessageList = ({children}: any) => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch<AppDispatch>();

    const [isMounted, setIsMounted] = useState(false);
    const [conversationList, setConversationList] = useState([]);

    const {conversations = {data: [], meta: null, time: ''}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, [id]);

    useEffect(() => {
        if (isMounted && conversations.time) {
            setConversationList(conversations.data);
        }
    }, [conversations.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.messageMS('api/v1/conversation'),
            storeName: 'conversations',
            defaultValue: [],
            showToast: false
        }));
    };

    return (
        <UserPortalLayout>
            <TitleCard title="Messages"></TitleCard>
            <section className="messages-section">
                <div className="chat-bar cards">
                    <div className="chats-header">
                        <div className="header-top">
                            <h2>Chats</h2>
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} className="icon"/>
                            </button>
                        </div>
                        <div className="chat-search">
                            <div className="form-group">
                                <input type="text" placeholder="Search..."/>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="chats">
                        <ul>
                            {isMounted && conversationList?.map((conversation: any, conversationIndex: number) => (
                                <li key={conversationIndex} onClick={() => router.push('/portal/user/message/' + conversation._id)} className={id === conversation._id ? 'active' : ''}>
                                    <div className="chat-img">
                                        <img
                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                            alt=""/>
                                    </div>
                                    <div className='chat-details' >
                                        <div className="chat-name-time">
                                            <h4>{conversation.user2.email}</h4>
                                            <span>12:46 AM</span>
                                        </div>
                                        <div className="message-overview">
                                            <p>Hello iraz, how are you? </p>
                                        </div>
                                    </div>
                                    <hr/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='chat-sec'>
                    {children}
                </div>
            </section>
        </UserPortalLayout>
    );
};

export default MessageList;

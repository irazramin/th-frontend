import React, {useEffect, useState} from 'react';
import {TitleCard} from '../../components/cards';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import {useRouter} from "next/router";
import ConversationModal from "../../components/modals/ConversationModal";
import Cookies from "js-cookie";

const MessageList = ({children, type}: any) => {
    const router = useRouter();
    const {id} = router.query;

    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const [isMounted, setIsMounted] = useState(false);
    const [conversationList, setConversationList]: any = useState([]);

    const {
        conversations = {data: [], meta: null, time: ''},
        conversationCreate = {data: [], time: ''},
        isLoading = false,
        user = {}
    } = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, [conversationCreate?.time]);

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            fetchData();
        }
    }, [isMounted]);

    console.log(conversations.data, conversationCreate.data)

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.messageMS('api/v1/conversation'),
            storeName: 'conversations',
            defaultValue: [],
            showToast: false
        }));
    };

    const createConversation = (userId2: any) => {
        const data = {userId2}
        if (confirm("Are you sure to create conversation?")) {
            dispatch(callApi({
                method: HttpHethod.POST,
                url: UrlHelper.messageMS('api/v1/conversation'),
                storeName: 'conversationCreate',
                body: data,
                defaultValue: null,
                showToast: true,
            }));
        }
    }

    return (
        <>
            <TitleCard title="Messages"></TitleCard>
            <section className="messages-section">
                <div className="chat-bar cards">
                    <div className="chats-header">
                        <div className="header-top">
                            <h2>Chats</h2>
                            <button onClick={() => setIsOpen(true)}>
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
                            {isMounted && conversations?.data?.map((conversation: any, conversationIndex: number) => (
                                conversation?.user1?._id === authUser?._id ?
                                    <li key={conversationIndex}
                                        onClick={() => router.push(`/portal/${type}/message/` + conversation._id)}
                                        className={id === conversation._id ? 'active' : ''}>
                                        <div className="chat-img">
                                            <img
                                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>{conversation?.user2?.firstName} {conversation?.user2?.lastName}</h4>
                                            </div>
                                            <div className="message-overview">
                                                <p>{conversation?.user2?.email}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                    </li>
                                    :
                                    <li key={conversationIndex}
                                        onClick={() => router.push(`/portal/${type}/message/` + conversation._id)}
                                        className={id === conversation._id ? 'active' : ''}>
                                        <div className="chat-img">
                                            <img
                                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>{conversation?.user1?.firstName} {conversation?.user1?.lastName}</h4>
                                            </div>
                                            <div className="message-overview">
                                                <p>{conversation?.user1?.email}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <ConversationModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}
                                       createConversation={createConversation}/>
                </div>
                <div className='chat-sec'>
                    {children}
                </div>
            </section>
        </>
    );
};

export default MessageList;

import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {any} from "prop-types";

const Conversation = ({ conversation, currentUser, handleChatClick } : any) => {
    const [oppositeUser, setOppositeUser]: any = useState({});

    useEffect( () => {
        const opposite = conversation?.members.find((member: any) => {
            console.log(member, currentUser)
            return  member !== currentUser
        });
        fetch(`http://localhost:4000/api/v1/users/${opposite}`).then(res => res.json()).then(data =>  setOppositeUser(data));
    }, [])

    return (
        <div onClick={() => handleChatClick(conversation._id)}>
            <li className=''>
                <div className="chat-img">
                    <div className='active-status'/>
                    <img
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt=""/>
                </div>
                <div className='chat-details'>
                    <div className="chat-name-time">
                        <h4>{oppositeUser?.email}</h4>
                        <span>12:46 AM</span>
                    </div>
                    <div className="message-overview">
                        <p>Hello iraz, how are you? </p>
                        <div className="message-notif">
                            <span>2</span>
                        </div>
                    </div>
                </div>
                <hr/>
            </li>
        </div>
    );
};

export default Conversation;

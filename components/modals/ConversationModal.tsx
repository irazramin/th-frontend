import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-responsive-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import {AppDispatch, RootState} from "../../store";

const ConversationModal = ({setIsOpen, modalIsOpen, modalRef, itemId, createConversation}: any) => {
    const dispatch = useDispatch<AppDispatch>();

    const [params, setParams] = useState({search: ""});

    const {users = {data: [], meta: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
    }, [params.search]);

    const fetchData = () => {
        if (params.search && modalIsOpen) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user'),
                params: params,
                storeName: 'users',
                defaultValue: [],
                showToast: false
            }));
        }
    };

    return (
        <Modal
            open={modalIsOpen}
            onClose={() => setIsOpen(false)}
            center
            ref={modalRef}
        >
            <div style={{minWidth: "300px", marginTop: "30px"}}>
                <div className="chat-search">
                    <div className="form-group">
                        <input type="text" placeholder="Search..."
                               onKeyUp={(e: any) => {
                                   if (e.key == "Enter") {
                                       setParams({...params, search: e.target.value});
                                   }
                               }}/>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="icon"
                        />
                    </div>
                </div>
                <div className="chats" style={{marginTop: "15px"}}>
                    <ul>
                        {users?.data?.map((user: any) => <li style={{marginTop: "10px", backgroundColor: "#f2f2f2"}}
                                                             onClick={() => createConversation(user._id)}>
                            <div className="chat-img">
                                <img
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt=""/>
                            </div>
                            <div className='chat-details' style={{margin: "auto"}}>
                                <div className="chat-name-time">
                                    <h4>{user.firstName} {user.lastName}</h4>
                                    <h4>{(user?.userType == 1 && 'Admin') || (user?.userType == 2 && 'Employer') || (user?.userType == 3 && 'User')}</h4>
                                </div>
                            </div>
                            <hr/>
                        </li>)}
                    </ul>
                </div>
            </div>

        </Modal>
    );
};

export default ConversationModal;

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
import React from "react";

const Dashboard = () => {
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
                                    <li className='active'>
                                        <div className="chat-img">
                                            <div className='active-status'/>
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    </li >
                                    <li>
                                        <div className="chat-img">
                                            <div className='active-status'/>
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    <li>
                                        <div className="chat-img">
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    <li>
                                        <div className="chat-img">
                                            <div className='active-status'/>

                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    <li>
                                        <div className="chat-img">
                                            <div className='active-status'/>
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    <li>
                                        <div className="chat-img">
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    <li>
                                        <div className="chat-img">
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                    <li>
                                        <div className="chat-img">
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className='chat-details'>
                                            <div className="chat-name-time">
                                                <h4>Iraz Ramin</h4>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='chat-section cards'>
                        <div className='chatbox-header'>
                            <div className='user-details'>
                                <div className="chat-img">
                                    <div className='active-status'/>
                                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                </div>
                                <div className="chat-name-status">
                                    <h4>Iraz Ramin</h4>
                                    <span> <FontAwesomeIcon icon={faCircle} className='icon' /> Active</span>
                                </div>
                            </div>
                            <div className='chat-tools'>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        </div>
                        <div className="chat-box">
                            <div className="all-messages">
                                <div className=" my-message">
                                    <div className='user-details'>
                                        {/*<div className="chat-img">*/}
                                        {/*    <div className='active-status'/>*/}
                                        {/*    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>*/}
                                        {/*</div>*/}
                                        <div className="chat-name-status">
                                            <h4>me</h4>
                                            <div className="messages">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                                </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                            </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opposite-message">
                                    <div className='user-details'>
                                        <div className="chat-img">
                                            <div className='active-status'/>
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className="chat-name-status">
                                            <h4>me</h4>
                                            <div className="messages">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                                </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                            </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" my-message">
                                    <div className='user-details'>
                                        {/*<div className="chat-img">*/}
                                        {/*    <div className='active-status'/>*/}
                                        {/*    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>*/}
                                        {/*</div>*/}
                                        <div className="chat-name-status">
                                            <h4>me</h4>
                                            <div className="messages">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                                </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                            </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opposite-message">
                                    <div className='user-details'>
                                        <div className="chat-img">
                                            <div className='active-status'/>
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className="chat-name-status">
                                            <h4>me</h4>
                                            <div className="messages">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                                </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                            </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" my-message">
                                    <div className='user-details'>
                                        {/*<div className="chat-img">*/}
                                        {/*    <div className='active-status'/>*/}
                                        {/*    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>*/}
                                        {/*</div>*/}
                                        <div className="chat-name-status">
                                            <h4>me</h4>
                                            <div className="messages">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                                </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                            </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opposite-message">
                                    <div className='user-details'>
                                        <div className="chat-img">
                                            <div className='active-status'/>
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        </div>
                                        <div className="chat-name-status">
                                            <h4>me</h4>
                                            <div className="messages">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                                </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores </p>
                                            </div> <div className="message">
                                                <p>Lorem ipsum dolor sit amet, </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Dashboard

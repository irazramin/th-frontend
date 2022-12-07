import React from 'react'

const Topbar = () => {
    return (
        <>
            <nav>
                <i className='bx bx-menu toggle-sidebar'/>
                <form action="#">
                    <div className="form-group">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search icon'/>
                    </div>
                </form>
                <a href="#" className="nav-link">
                    <i className='bx bxs-bell icon'/>
                    <span className="badge">5</span>
                </a>
                <a href="#" className="nav-link">
                    <i className='bx bxs-message-square-dots icon'/>
                    <span className="badge">8</span>
                </a>
                <span className="divider"/>
                <div className="profile">
                    <img style={{height: '36px', width: '36px'}} src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <ul className="profile-link">
                        <li><a href="#"><i className='bx bxs-user-circle icon'/> Profile</a></li>
                        <li><a href="#"><i className='bx bxs-cog'/> Settings</a></li>
                        <li><a href="#"><i className='bx bxs-log-out-circle'/> Logout</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Topbar
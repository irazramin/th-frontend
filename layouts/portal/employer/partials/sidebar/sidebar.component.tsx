import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase, faEnvelopeOpen, faShapes} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store";

const Sidebar = () => {


    const router = useRouter();

    const collapseState = useSelector((state: RootState) => state.collapse.collapse);

    const [menuList] = useState([
        {
            id: 1,
            title: 'Dashboard',
            icon: faShapes,
            link: '/portal/employer/dashboard'
        },
        {
            id: 2,
            title: 'Messages',
            icon: faEnvelopeOpen,
            link: '/portal/employer/message'
        },
        {
            id: 3,
            title: 'Jobs',
            icon: faBriefcase,
            link: '/portal/employer/job'
        }
    ]);

    return (
        <>
            <section id="sidebar" className={collapseState ? 'hide' : ''}>
                <a href="#" className="brand">
                    <img className='project-logo-1' src="/project-logo.png" alt=""/>
                    <img src="/logo.png" className='project-logo-2' alt=""/>
                </a>
                <ul className="side-menu">
                    {menuList.map((menuItem, menuIndex) => {
                        return (
                            <li key={menuIndex}>
                                <Link href={menuItem.link}
                                      className={(router.pathname == menuItem.link) || (router.pathname == menuItem.link + '/add') ? 'active' : ''}>
                                    <FontAwesomeIcon icon={menuItem.icon} size="lg" fixedWidth
                                                     className='icon'/> {menuItem.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    );

}

export default Sidebar

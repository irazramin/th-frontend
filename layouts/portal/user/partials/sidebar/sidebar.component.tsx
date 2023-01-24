import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBriefcase,
    faEnvelopeOpen,
    faFileInvoice,
    faFilePen,
    faGear,
    faShapes
} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from "react-redux";
import {AppState} from "../../../../../store";

const Sidebar = () => {

    const router = useRouter();

    const collapseState = useSelector((state: AppState) => state.collapse);

    const [menuList] = useState([
        {
            id: 1,
            title: 'Dashboard',
            icon: faShapes,
            link: '/portal/user/dashboard'
        },
        {
            id: 2,
            title: 'Messages',
            icon: faEnvelopeOpen,
            link: '/portal/user/message'
        },
        {
            id: 3,
            title: 'Jobs',
            icon: faBriefcase,
            link: '/portal/user/job'
        },
        {
            id: 4,
            title: 'Exams',
            icon: faFilePen,
            link: '/portal/user/exam'
        },
        {
            id: 5,
            title: 'My Resume',
            icon: faFileInvoice,
            link: '/portal/user/resume'
        },
        {
            id: 6,
            title: 'Setting',
            icon: faGear,
            link: '/portal/user/setting'
        }
    ]);

    return (
        <>
            <section id="sidebar" className={collapseState ? 'hide' : ''}>
                <a href="#" className="brand">
                    <img className='project-logo-1' src="/project-logo.png" alt="" />
                    <img src="/logo.png" className='project-logo-2' alt="" />
                </a>
                <ul className="side-menu">
                    {menuList.map((menuItem, menuIndex) => {
                        return (
                            <li key={menuIndex}>
                                <Link href={menuItem.link} className={(router.pathname == menuItem.link) || (menuItem.link+'/details'  == router.pathname+'/details') ? 'active' : ''}>
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
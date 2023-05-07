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
import { RootState} from "../../../../../store";

const Sidebar = () => {

    const router = useRouter();

    const collapseState = useSelector((state: RootState) => state.collapse.collapse);

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
            title: 'Education',
            icon: faGear,
            link: '/portal/user/education'
        },
        {
            id: 7,
            title: 'Experience',
            icon: faGear,
            link: '/portal/user/experience'
        },
        {
            id: 8,
            title: 'Interest',
            icon: faGear,
            link: '/portal/user/interest'
        },
        {
            id: 9,
            title: 'Language',
            icon: faGear,
            link: '/portal/user/language'
        },
        {
            id: 10,
            title: 'Reference',
            icon: faGear,
            link: '/portal/user/reference'
        },
        {
            id: 11,
            title: 'Project',
            icon: faGear,
            link: '/portal/user/project'
        },
        {
            id: 9,
            title: 'Skill',
            icon: faGear,
            link: '/portal/user/skill'
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
                                <Link href={menuItem.link}  className={router.pathname == menuItem.link  || (router.pathname == menuItem.link+'/add' || router.pathname == menuItem.link+'/[id]/edit' || router.pathname == menuItem.link+'/[id]') ? 'active' : ''}>
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

import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBriefcase,
    faBusinessTime,
    faEnvelopeOpen,
    faFileCode,
    faFileInvoice,
    faFilePen,
    faGear,
    faGraduationCap,
    faLanguage,
    faLaptopCode,
    faPen,
    faShapes,
    faStar
} from '@fortawesome/free-solid-svg-icons'
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
            link: '/portal/user/dashboard',
            class: false,
        },
        {
            id: 2,
            title: 'Messages',
            icon: faEnvelopeOpen,
            link: '/portal/user/message',
            class: false,
        },
        {
            id: 3,
            title: 'Jobs',
            icon: faBriefcase,
            link: '/portal/user/job',
            class: false,
        },
        {
            id: 4,
            title: 'Exams',
            icon: faFilePen,
            link: '/portal/user/exam',
            class: false,
        },
        {
            id: 5,
            title: 'My Resume',
            icon: faFileInvoice,
            link: '/portal/user/resume',
            class: false,
        },
        {
            id: 6,
            title: 'Main',
            icon: faGear,
            class: true,
        },
        {
            id: 7,
            title: 'Education',
            icon: faGraduationCap,
            link: '/portal/user/education',
            class: false,
        },
        {
            id: 8,
            title: 'Experience',
            icon: faBusinessTime,
            link: '/portal/user/experience',
            class: false,
        },
        {
            id: 9,
            title: 'Interest',
            icon: faStar,
            link: '/portal/user/interest',
            class: false,
        },
        {
            id: 10,
            title: 'Language',
            icon: faLanguage,
            link: '/portal/user/language',
            class: false,
        },
        {
            id: 11,
            title: 'Reference',
            icon: faPen,
            link: '/portal/user/reference',
            class: false,
        },
        {
            id: 12,
            title: 'Project',
            icon: faFileCode,
            link: '/portal/user/project',
            class: false,
        },
        {
            id: 9,
            title: 'Skill',
            icon: faLaptopCode,
            link: '/portal/user/skill',
            class: false,
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

                            menuItem.class ?
                                <li key={menuIndex} className={menuItem.class ? 'divider' : ''}>
                                    {menuItem.title}
                                </li>
                                :
                                <li key={menuIndex} className={menuItem.class ? 'divider' : ''}>
                                    <Link href={menuItem.link || ''}
                                          className={router.pathname == menuItem.link || (router.pathname == menuItem.link + '/add' || router.pathname == menuItem.link + '/[id]/edit' || router.pathname == menuItem.link + '/[id]') ? 'active' : ''}>
                                        <FontAwesomeIcon icon={menuItem.icon || ''} size="lg" fixedWidth
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

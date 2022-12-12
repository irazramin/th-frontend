import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBriefcase,
    faEnvelopeOpen,
    faFileCircleQuestion,
    faFilePen,
    faGear,
    faShapes
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

    const router = useRouter();

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
        },
        {
            id: 4,
            title: 'Exams',
            icon: faFilePen,
            link: '/portal/employer/exam'
        },
        {
            id: 5,
            title: 'Questions',
            icon: faFileCircleQuestion,
            link: '/portal/employer/question'
        },
        {
            id: 6,
            title: 'Setting',
            icon: faGear,
            link: '/portal/employer/setting'
        }
    ]);

    return (
        <>
            <section id="sidebar">
                <a href="#" className="brand">
                    <i className="bx bxs-smile icon"/> TalentHub
                </a>
                <ul className="side-menu">
                    {menuList.map((menuItem, menuIndex) => {
                        return (
                            <li key={menuIndex} >
                                <Link href={menuItem.link} className={router.pathname == menuItem.link ? 'active' : ''}>
                                    <FontAwesomeIcon icon={menuItem.icon} size="lg" fixedWidth className='icon'/> {menuItem.title}
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
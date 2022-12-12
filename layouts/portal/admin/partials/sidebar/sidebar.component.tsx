import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faChartGantt,
    faCity,
    faGear,
    faLanguage,
    faLaptopCode,
    faList,
    faShapes,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

    const router = useRouter();

    const [menuList] = useState([
        {
            id: 1,
            title: 'Dashboard',
            icon: faShapes,
            link: '/portal/admin/dashboard'
        },
        {
            id: 2,
            title: 'User',
            icon: faUsers,
            link: '/portal/admin/user'
        },
        {
            id: 3,
            title: 'Company',
            icon: faCity,
            link: '/portal/admin/company'
        },
        {
            id: 4,
            title: 'Category',
            icon: faList,
            link: '/portal/admin/category'
        },
        {
            id: 5,
            title: 'Subcategory',
            icon: faChartGantt,
            link: '/portal/admin/subcategory'
        },
        {
            id: 6,
            title: 'Skill',
            icon: faLaptopCode,
            link: '/portal/admin/skill'
        },
        {
            id: 7,
            title: 'Language',
            icon: faLanguage,
            link: '/portal/admin/language'
        },
        {
            id: 8,
            title: 'Setting',
            icon: faGear,
            link: '/portal/admin/setting'
        }
    ]);

    return (
        <>
            <section id="sidebar" className='hide'>
                <a href="#" className="brand">
                    <i className="bx bxs-smile icon"/> TalentHub
                </a>
                <ul className="side-menu">
                    {menuList.map((menuItem, menuIndex) => {
                        return (
                            <li key={menuIndex} >
                                <Link href={menuItem.link} className={router.pathname == menuItem.link ? 'active' : ''}>
                                    {}
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
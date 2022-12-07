import React, {useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar = () => {

    const router = useRouter();

    const [menuList] = useState([
        {
            id: 1,
            title: 'Dashboard',
            icon: 'fa-shapes',
            link: '/portal/admin/dashboard'
        },
        {
            id: 2,
            title: 'User',
            icon: 'fa-users',
            link: '/portal/admin/user'
        },
        {
            id: 3,
            title: 'Company',
            icon: 'fa-city',
            link: '/portal/admin/company'
        },
        {
            id: 4,
            title: 'Category',
            icon: 'fa-list',
            link: '/portal/admin/category'
        },
        {
            id: 5,
            title: 'Subcategory',
            icon: 'fa-chart-gantt',
            link: '/portal/admin/subcategory'
        },
        {
            id: 6,
            title: 'Skill',
            icon: 'fa-laptop-code',
            link: '/portal/admin/skill'
        },
        {
            id: 7,
            title: 'Language',
            icon: 'fa-language',
            link: '/portal/admin/language'
        },
        {
            id: 8,
            title: 'Setting',
            icon: 'fa-gear',
            link: '/portal/admin/setting'
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
                                    {}
                                    <i className={`fa-solid ${menuItem.icon} icon`}/> {menuItem.title}
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
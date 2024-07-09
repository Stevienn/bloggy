'use client'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

const Links = () => {
    const pathName = usePathname();

    const links = [
        {
            id: 1,
            title: "Home",
            path: "/",
        },
        {   id: 2,
            title: "Blog",
            path: "/blog",
        },
        {
            id: 3,
            title: "Post",
            path: "/post",
        },
        {
            id: 4,
            title: "About Us",
            path: "/aboutus",
        },
    ]

    return (
        <div className={styles.navigation}>
            {links.map((link=>(
                <Link key={link.id} href={link.path} className={`${styles.navLink} ${pathName === link.path && styles.active}`}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links
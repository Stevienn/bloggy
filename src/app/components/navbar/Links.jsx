'use client'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

const Links = () => {
    const pathName = usePathname();

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Post",
            path: "/post",
        },
        {
            title: "About Us",
            path: "/aboutus",
        },
    ]

    return (
        <div className={styles.navigation}>
            {links.map((link=>(
                <Link href={link.path} className={`${styles.navLink} ${pathName === link.path && styles.active}`}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links
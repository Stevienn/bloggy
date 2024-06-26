import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Links from './Links';

export const Navbar = () => {
  return (
    <nav className={styles.container}>
        <h1>Bloggy</h1>
        <Links />
        <Link href="/login" className={styles.loginBox}>
            <h2>Login</h2>
        </Link>
    </nav>
  )
}

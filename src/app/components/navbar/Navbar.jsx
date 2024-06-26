import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Links from './Links';

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Bloggy</h1>
        <Links />
        <Link href="/login" className={styles.loginBox}>
            <h2 className={styles.login}>Login</h2>
        </Link>
    </div>
  )
}

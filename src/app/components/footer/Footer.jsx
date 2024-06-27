import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <section className={styles.firstSection}>
            <h1>Bloggy</h1>
            <h2>Keep updated and fresh just on Bloggy</h2>
        </section>
        <section className={styles.secondSection}>
            <h2>Download Bloggy</h2>
            <Link href='#'><p>Windows App</p></Link>
            <Link href='#'><p>Mac App</p></Link>
            <h2>About Bloggy</h2>
            <Link href='#'><p>About Us</p></Link>
        </section>
        <section className={styles.thirdSection}>
            <h2>Services</h2>
            <Link href='#'><p>Terms & Conditions</p></Link>
            <Link href='#'><p>Privacy Policy</p></Link>
            <Link href='#'><p>Faq's</p></Link>
        </section>
        <section className={styles.fourthSection}>
            <h2>Stay in Touch</h2>
            <div className={styles.socialSection}>
                <Link href='#' className={styles.iconBackground}>
                    <Image
                    src="/icons/Instagram.png"
                    width={22}
                    height={22}
                    />
                </Link>
                <Link href='#' className={styles.iconBackground}>
                    <Image
                    src="/icons/Twitter.png"
                    width={20}
                    height={20}
                    />
                </Link>
                <Link href='#' className={styles.iconBackground}>
                    <Image
                    src="/icons/Facebook.png"
                    width={22}
                    height={22}
                    />
                </Link>
            </div>
            <h3>@2024 Bloggy, All right reserved</h3>
        </section>
    </footer>
  )
}

export default Footer
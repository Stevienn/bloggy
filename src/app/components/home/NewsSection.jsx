import React from 'react'
import styles from './NewsSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NewsSection = () => {
  return (
    <main className={styles.container}>
        <h1>What's New on Bloggy ...</h1>
        <section className={styles.gridContainer}>
            <article className={styles.mainArticle}>
                <section className={styles.imageContainer}>
                    <Image 
                    src="/dummy_image/Lifestyle1.jpg" 
                    width={800}
                    height={500}
                    className={styles.image}
                    />
                </section>
                <section className={styles.content}>
                    <div className={styles.categoryBackground}>
                        <h2>Lifestyle</h2>
                    </div>
                    <div className={styles.title}>
                        <h2>New and Trending Fashion of 2024</h2>
                    </div>
                    <div className={styles.desc}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum...
                        </p>
                    </div>
                    <div className={styles.author}>
                        <h3>Miko Tatsuke</h3>
                    </div>
                
                    <Link href="/"className={styles.readMoreBackground}>
                        <h2>Read More</h2>
                    </Link>
                </section>
            </article>
            <article className={styles.subArticle}>
                <section className={styles.imageContainer}>
                    <Image 
                    src="/dummy_image/Lifestyle1.jpg" 
                    width={440}
                    height={300}
                    className={styles.image}
                    />
                </section>
                <section className={styles.content}>
                    <div className={styles.categoryBackground}>
                        <h2>Lifestyle</h2>
                    </div>
                    <div className={styles.title}>
                        <h2>New and Trending Fashion of 2024</h2>
                    </div>
                    <div className={styles.author}>
                        <h3>Miko Tatsuke</h3>
                    </div>
                
                    <Link href="/"className={styles.readMoreBackground}>
                        <h2>Read More</h2>
                    </Link>
                </section>
            </article>
            <article className={styles.subArticle}>
                sub
            </article>
        </section>
    </main>
  )
}

export default NewsSection
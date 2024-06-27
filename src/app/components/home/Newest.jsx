import React from 'react'
import styles from './Newest.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Recommendation = () => {
  return (
    <main className={styles.container}>
        <h1>Recently posted ...</h1>
        <section className={styles.gridContainer}>
            <section className={styles.article}>
                <section className={styles.imageContainer}>
                    <Image 
                    src="/dummy_image/Finance1.jpeg" 
                    width={450}
                    height={220}
                    className={styles.image}
                    />
                </section>
                <section className={styles.content}>
                    <Link href="/" className={styles.categoryBackground}>
                        <h2>Finance</h2>
                    </Link>
                    <div className={styles.title}>
                        <h2>How to Make Most of Your Inheritance</h2>
                    </div>
                    <div className={styles.author}>
                        <h3>Steven Hartanto</h3>
                    </div>
                
                    <Link href="/"className={styles.readMoreBackground}>
                        <h2>Read More</h2>
                    </Link>
                </section>
            </section>
            <section className={styles.article}>
                <section className={styles.article}>
                    <section className={styles.imageContainer}>
                        <Image 
                        src="/dummy_image/Finance1.jpeg" 
                        width={450}
                        height={220}
                        className={styles.image}
                        />
                    </section>
                    <section className={styles.content}>
                        <Link href="/" className={styles.categoryBackground}>
                            <h2>Finance</h2>
                        </Link>
                        <div className={styles.title}>
                            <h2>How to Make Most of Your Inheritance</h2>
                        </div>
                        <div className={styles.author}>
                            <h3>Steven Hartanto</h3>
                        </div>
                    
                        <Link href="/"className={styles.readMoreBackground}>
                            <h2>Read More</h2>
                        </Link>
                    </section>
                </section>
            </section>
            <section className={styles.article}>
                <section className={styles.article}>
                    <section className={styles.imageContainer}>
                        <Image 
                        src="/dummy_image/Finance1.jpeg" 
                        width={450}
                        height={220}
                        className={styles.image}
                        />
                    </section>
                    <section className={styles.content}>
                        <Link href="/" className={styles.categoryBackground}>
                            <h2>Finance</h2>
                        </Link>
                        <div className={styles.title}>
                            <h2>How to Make Most of Your Inheritance</h2>
                        </div>
                        <div className={styles.author}>
                            <h3>Steven Hartanto</h3>
                        </div>
                    
                        <Link href="/"className={styles.readMoreBackground}>
                            <h2>Read More</h2>
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Recommendation
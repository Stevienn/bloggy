import React from 'react'
import styles from './Categories.module.css'
import Link from 'next/link'

const Categories = () => {
  return (
    <section className={styles.container}>
        <h1>Based on Categories ...</h1>
        <div className={styles.gridContainer}>
            <Link href='#' className={styles.categoryBackground}>
                <h2>Travel</h2>
            </Link>
            <Link href='#' className={styles.categoryBackground}>
                <h2>Food</h2>
            </Link>
            <Link href='#' className={styles.categoryBackground}>
                <h2>Sports</h2>
            </Link>
            <Link href='#' className={styles.categoryBackground}>
                <h2>Technology</h2>
            </Link>
            <Link href='#' className={styles.categoryBackground}>
                <h2>E-Sports</h2>
            </Link>
            <Link href='#' className={styles.categoryBackground}>
                <h2>Finance</h2>
            </Link>
            <Link href='#' className={styles.categoryBackground}>
                <h2>Personal</h2>
            </Link>
            <Link href='/blog' className={styles.categoryBackground}>
                <h2>More . . .</h2>
            </Link>
        </div>
        
    </section>
  )
}

export default Categories
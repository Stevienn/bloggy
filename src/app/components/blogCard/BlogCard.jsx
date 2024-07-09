import React from 'react'
import styles from './BlogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = (props) => {
  return (
    <div className={styles.article}>
        <section className={styles.imageContainer}>
            <Image 
            src={props.image} 
            width={420}
            height={220}
            className={styles.image}
            />
        </section>
        <section className={styles.content}>
            <Link href="/" className={styles.categoryBackground}>
                 <h2>{props.categories}</h2>
            </Link>
            <div className={styles.title}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.author}>
                <h3>{props.author}</h3>
            </div> 
            <Link href="/blog/post"className={styles.readMoreBackground}>
                <h2>Read More</h2>
            </Link>
        </section>
    </div>
  )
}

export default BlogCard
import React from 'react'
import styles from './SinglePost.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SinglePost = () => {
  return (
    <main className={styles.mainContainer}>
        <section className={styles.mainContent}>
            <article className={styles.title}>
                <h1>Title</h1>
                <div className={styles.dateAuthor}>
                    <p>June 25, 2024</p><p>|</p><p>Writer</p>
                </div>
                <Image 
                    src="/dummy_image/Lifestyle1.jpg" 
                    width={800}
                    height={500}
                    className={styles.image}
                    />
                <div className={styles.share}>
                    <h2>Also share on</h2>
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
                </div>
            </article>
            <article className={styles.content}>
                <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                </h2>
            </article>
        </section>
        <section className={styles.relatedPost}> 
            {/* later will added based on the categories that we read */}
            <h1>Related Posts</h1> 
            <div className={styles.article}>
                <section className={styles.imageContainer}>
                    <Image 
                    src={"/dummy_image/Lifestyle2.jpg"} 
                    width={400}
                    height={220}
                    className={styles.image}
                    />
                </section>
                <section className={styles.content}>
                    <Link href="/" className={styles.categoryBackground}>
                        <h2>Lifestyle</h2>
                    </Link>
                    <div className={styles.title}>
                        <h2>Title</h2>
                    </div>
                    <div className={styles.author}>
                        <h3>Author</h3>
                    </div> 
                    <Link href="/blog/post"className={styles.readMoreBackground}>
                        <h2>Read More</h2>
                    </Link>
                </section>
            </div>
        </section>
    </main>
  )
}

export default SinglePost
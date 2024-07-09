import React from 'react'
import styles from './Invite.module.css'
import Image from 'next/image'

const Invite = () => {
  return (
    <section className={styles.container}>
        <div className={styles.formContainer}>
            <h1>Invite your friend to Bloggy to get FREE PREMIUM TRIAL !</h1>
            <div className={styles.submitContainer}>
                <input type="email" placeholder='Your Friend Email' />
                <button>Submit</button>
            </div>
        </div>
    </section>
  )
}

export default Invite
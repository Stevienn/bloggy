'use client'
import React, { useState } from 'react'
import styles from './LoginRegisCard.module.css'
import Link from 'next/link';

const LoginCard = () => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main className={styles.container}>
      <section className={styles.formContainer}>
        <h1>Welcome Back !</h1>
        <form>
          <label>
            Username/Email
            <input type='text' placeholder='ex: vimiko19' value={useremail} onChange={(event)=>setUseremail(event.target.value)} />
          </label>
          <label>
            Password
            <input type='password' placeholder='ex: ********' value={password} onChange={(event)=>setPassword(event.target.value)} />
          </label>
          <button type="submit">LOGIN</button>
        </form>
        <section className={styles.registerContainer}>
          <h2>Haven't created any account? </h2><Link className={styles.register} href='/register'>Register here !</Link>
        </section>
       
      </section>
      
    </main>
  )
}

export default LoginCard
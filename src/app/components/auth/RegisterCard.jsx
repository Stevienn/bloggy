'use client'
import React, { useState } from 'react'
import styles from './LoginRegisCard.module.css'
import Link from 'next/link';

const RegisterCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main className={styles.container}>
      <section className={styles.formContainer}>
        <h1>Create an Account !</h1>
        <form>
          <label>
            Username
            <input type='text' placeholder='ex: vimiko19' value={username} onChange={(event)=>setUsername(event.target.value)} />
          </label>
          <label>
          <label>
            Email
            <input type='email' placeholder='ex: vimiko19@gmail.com' value={email} onChange={(event)=>setEmail(event.target.value)} />
          </label>
            Password
            <input type='password' placeholder='ex: ********' value={password} onChange={(event)=>setPassword(event.target.value)} />
          </label>
          <button type="submit">REGISTER</button>
        </form>
        <section className={styles.registerContainer}>
          <h2>Already have an account? </h2><Link className={styles.register} href='/login'>Login here !</Link>
        </section>
       
      </section>
      
    </main>
  )
}

export default RegisterCard
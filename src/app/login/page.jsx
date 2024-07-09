import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import LoginCard from '../components/auth/LoginCard'

const LoginPage = () => {
  return (
    <div>
        <Navbar />
        <LoginCard />
        <Footer />
    </div>
  )
}

export default LoginPage
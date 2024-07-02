import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import RegisterCard from '../components/auth/RegisterCard'

const RegisterPage = () => {
  return (
    <div>
        <Navbar />
        <RegisterCard />
        <Footer />
    </div>
  )
}

export default RegisterPage
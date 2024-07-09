import Footer from '@/app/components/footer/Footer'
import { Navbar } from '@/app/components/navbar/Navbar'
import SinglePost from '@/app/components/singlePost/SinglePost'
import React from 'react'

const ReadMorePage = () => {
  return (
    <div>
      <Navbar />
      <SinglePost />
      <Footer />
    </div>
  )
}

export default ReadMorePage
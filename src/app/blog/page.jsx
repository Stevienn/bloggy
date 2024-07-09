import React from 'react'
import { Navbar } from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import BlogContent from '../components/blog/BlogContent';

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogContent />
      <Footer />
    </div>
  )
}

export default BlogPage;
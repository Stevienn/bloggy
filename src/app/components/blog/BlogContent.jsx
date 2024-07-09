'use client'
import React, { useState } from 'react'
import styles from './BlogContent.module.css'
import Image from 'next/image'
import BlogCard from '../blogCard/BlogCard'
import dummy_Blog from '../assets/dummy_Blog'

const BlogContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const list = [
        {
            categories: "All"
        },
        {
            categories: "Travel"
        },
        {
            categories: "Food"
        },
        {
            categories: "Sports"
        },
        {
            categories: "Technology"
        },
        {
            categories: "E-Sports"
        },
        {
            categories: "Finance"
        },
        {
            categories: "Personal"
        },
        {
            categories: "Political"
        },
        {
            categories: "Entertainment"
        },
        {
            categories: "Lifestyle"
        },
        {
            categories: "Historical"
        },
    ]

    const filteredBlogs = dummy_Blog.filter((blog) => {
        if (selectedCategory === 'All') {
            return true
        } else {
            return blog.categories === selectedCategory
        }
    })

    return (
        <main className={styles.container}>
            <section className={styles.categorySection}>
                <div className={styles.title}>
                    <Image
                    src="/icons/Categories.png"
                    width={27}
                    height={27}
                    />
                    <h1>Categories</h1>
                </div>
                <div className={styles.categories}>
                    {list.map((category)=>(
                        <button 
                            onClick={() => setSelectedCategory(category.categories)}
                            style={{ color: selectedCategory === category.categories ? '#AF8260' : 'black' }}
                        >
                            {category.categories}
                        </button>
                    ))}
                </div>
            </section>
            <section className={styles.blogSection}>
                <div className={styles.filteredWord}>
                    <h1>Search result for : </h1><h2>{selectedCategory}</h2>
                </div>
                <section className={styles.blogCards}>
                    {filteredBlogs.map((blog, i)=>{
                        return <BlogCard key={i} id={blog.id} image={blog.image} title={blog.title} 
                                        categories={blog.categories} author={blog.author} content={blog.content}/>
                    })}
                </section>
                
            </section>
        </main>
    )
}

export default BlogContent
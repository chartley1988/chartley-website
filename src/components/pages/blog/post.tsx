import React from "react"
import ReactMarkdown from 'react-markdown'
import './post.css'

interface BlogPostType {
    title: string,
    post_date: string,
    content: string
}

function BlogPost ({title, post_date, content}: BlogPostType) {
    console.log(post_date);
    return <li className="blog-post main-container">
        <h3>{title}</h3>
        <p>{post_date}</p>
        <ReactMarkdown className="blog-markdown">{content}</ReactMarkdown>
    </li>
}

export default BlogPost
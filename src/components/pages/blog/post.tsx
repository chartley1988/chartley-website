import React from "react"
import ReactMarkdown from 'react-markdown'
import './post.css'
import { Link } from "react-router-dom"

interface BlogPostType {
    title: string,
    post_date: string,
    content: string
}

function BlogPost ({title, post_date, content}: BlogPostType) {
    return <li className="blog-post main-container">
        <Link to='/blog-post' state={{title, post_date, content}}>
            <h3>{title}</h3>
        </Link>
            <p>{post_date}</p>
    </li>
}

export default BlogPost
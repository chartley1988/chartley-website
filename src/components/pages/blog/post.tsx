import React from "react"
import ReactMarkdown from 'react-markdown'
import './post.css'
import { Link } from "react-router-dom"

interface BlogPostType {
    title: string,
    post_date: string,
    content: string,
    post_id: string,
}

function PostListing ({title, post_date, post_id}: BlogPostType) {
    return <li className="blog-list-entry main-container">
        <Link to={`/blog/${post_id}/`}>
            {title}
        </Link>
            <p>{post_date}</p>
    </li>
}

export default PostListing
import React from "react"

interface BlogPostType {
    title: string,
    date: string,
    content: string
}

function BlogPost ({title, date, content}: BlogPostType) {
    
    return <li>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{content}</p>
    </li>
}

export default BlogPost
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

function BlogPost (props: any) {
    const location = useLocation();
    console.log(location.state);

    return <div className="main-container">
        <h2>{location.state.title}</h2>
        <p>{location.state.post_date}</p>
        <ReactMarkdown>{location.state.content}</ReactMarkdown>
    </div>
}

export default BlogPost
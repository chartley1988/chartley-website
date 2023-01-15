import React, { useEffect, useState } from "react";
import './blog.css'
import BlogData from "../../../data/blog_data";
import BlogPost from "./post";

function Blog () {
    const [blogPosts, setBlogPosts] = useState([{}]);

    useEffect(() => {
        let PROJECT_ID = 'txzsiuwe';
        let DATASET = 'production';
        let QUERY = encodeURIComponent('*[_type == "blog-post"]');
        
        let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
        
        const blog_data = fetch(URL)
            .then((response) => response.json())
            .then(({ result }) => {
                console.log(result);
                setBlogPosts(result);
        })
    },[])

    return <ul className="blog">
        {
        blogPosts && blogPosts.map((post: any) => (
                <BlogPost title={post.title} date={post.date} content={post.content} />
        ))
        }
    </ul>
};

export default Blog
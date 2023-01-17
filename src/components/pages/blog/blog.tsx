import React, { useEffect, useState } from 'react';
import './blog.css';
import BlogPost from './post';
import getBlogData from './getBlogData';

function Blog() {
	const [blogPosts, setBlogPosts] = useState([{
        date_posted: ''
    }]);

	useEffect(() => {
		getBlogData().then((data)=>{
            setBlogPosts(data);
        })
	}, []);

	const loading = () => {
		return <p>Loading</p>;
	};

	return (
		<ul className='blog'>
			{blogPosts &&
				blogPosts.map((post: any, index) => (
					<BlogPost
						title={post.title}
						post_date={post.date_posted.split('T')[0]}
						content={post.content}
                        post_id= {post.post_id}
						key={index}
					/>
				))}
		</ul>
	);
}

export default Blog;

import React, { useEffect, useState } from 'react';
import './blog.css';
import BlogData from '../../../data/blog_data';
import BlogPost from './post';
import { Link } from 'react-router-dom';

function Blog() {
	const [blogPosts, setBlogPosts] = useState([{
        date_posted: ''
    }]);

	useEffect(() => {
		let PROJECT_ID = 'txzsiuwe';
		let DATASET = 'production';
		let QUERY = encodeURIComponent('*[_type == "blog-post"]');

		let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

		const blog_data = fetch(URL)
			.then((response) => response.json())
			.then(({ result }) => {
				setBlogPosts(result);
			});
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
						key={index}
					/>
				))}
		</ul>
	);
}

export default Blog;

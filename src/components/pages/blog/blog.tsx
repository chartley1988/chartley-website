import React, { useEffect, useState } from 'react';
import './blog.css';
import PostListing from './post';
import getBlogData from './getBlogData';
import { useLoaderData } from 'react-router';

function Blog() {
	const blogPosts: any = useLoaderData();

	return (
		<ul className='blog'>
			{blogPosts &&
				blogPosts.map((post: any, index: number) => (
					<PostListing
						title={post.title}
						post_date={post.date_posted.split('T')[0]}
						content={post.content}
						post_id={post.post_id}
						key={index}
					/>
				))}
		</ul>
	);
}

export default Blog;

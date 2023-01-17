import {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './blog_post.css'

function BlogPost() {
	const data: any = useLoaderData();
    console.log(data);

	const [postData, setPostData] = useState(data[0]);

	return (
		<div className='main-container'>
			<h2>{postData.title}</h2>
			<p>{postData.post_date}</p>
			<ReactMarkdown>{postData.content}</ReactMarkdown>
		</div>
	);
}

export default BlogPost;

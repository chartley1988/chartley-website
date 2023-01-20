import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './blog_post.css';

function BlogPost() {
	const data: any = useLoaderData();
	console.log(data);

	const postData = data[0];

	return (
		<div className='main-container blog-post'>
			<div>
				<h2>{postData.title}</h2>
				<p>{postData.date_posted.split('T')[0]}</p>
			</div>
			<ReactMarkdown>{postData.content}</ReactMarkdown>
		</div>
	);
}

export default BlogPost;

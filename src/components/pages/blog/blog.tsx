import React from "react";
import './blog.css'
import BlogData from "../../../data/blog_data";

const iterate = (obj: any) => {
	const objectArray: Object[] = [];
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			objectArray.push(obj[key]);
		}
	});
	return objectArray;
};

const entryArray = iterate(BlogData);

const listPosts = entryArray.map((project: any) => (
	<li className='blog-post' key={project.key_value}>
		
	</li>
));

function Blog () {
    return <div className="blog">
        {listPosts}
    </div>
};

export default Blog
import React, { useEffect, useState } from 'react';
import './blog.css';
import BlogData from '../../../data/blog_data';
import BlogPost from './post';
import { Link } from 'react-router-dom';

async function getBlogData() {

	let PROJECT_ID = 'txzsiuwe';
	let DATASET = 'production';
	let QUERY = encodeURIComponent('*[_type == "blog-post"]');

	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	const blog_data = await fetch(URL)
		.then((response) => response.json())
		.then(({ result }) => {
			return result
		})
		.catch((error) => {
			console.log(error);
			return null;
		});

	return (
		blog_data
	);
}

export default getBlogData;

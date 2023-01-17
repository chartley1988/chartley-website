import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
	createBrowserRouter,
	RouterProvider,
	useParams,
} from 'react-router-dom';
import ErrorPage from './components/pages/error/error';
import AboutMe from './components/pages/about_me/about_me';
import Blog from './components/pages/blog/blog';
import Home from './components/pages/home/home';
import BlogPost from './components/pages/blog_post/blog_post';
import getBlogPostData from './components/pages/blog/getBlogPostData';
import getBlogData from './components/pages/blog/getBlogData';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'blog',
				element: <Blog />,
				loader: async ({params}) => {
					const data = await getBlogData().then((data)=>{
						return data
					})
					return data
				},
			},
			{
				path: '/blog/:entry',
				element: <BlogPost />,
				loader: async ({params}) => {
					const post = await getBlogPostData(params.entry).then((post)=>{
						return post
					})
					return post
				},
			},
			{
				path: 'about-me',
				element: <AboutMe />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

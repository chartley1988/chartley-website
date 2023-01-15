import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/pages/error/error';
import AboutMe from './components/pages/about_me/about_me';
import Blog from './components/pages/blog/blog';
import Home from './components/pages/home/home';
import BlogPost from './components/pages/blog_post/blog_post';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'about-me',
				element: <AboutMe />,
			},
			{
				path: 'blog',
				element: <Blog />,
			},
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'blog-post',
				element: <BlogPost />,
			},

		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

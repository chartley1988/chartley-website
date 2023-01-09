import React from 'react';
import { useRouteError } from 'react-router';
import './error.css';
import Header from '../../header/header';
import NavMenu from '../../nav_menu/nav_menu';
import Footer from '../../footer/footer';

function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className='error-page'>
			<Header />
			<NavMenu />
			<main>
				<section>
					<h1>Error! Page not found!</h1>
					<p>Sorry, an unexpected error has occurred!</p>
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default ErrorPage;

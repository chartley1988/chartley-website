import React from 'react';
import './about_me.css';
import photo from '../../../images/about_me_photo.jpg';

function AboutMe() {
	return (
		<div className='about-me main'>
			<section className='main-container'>
				<p>
					Hello! My name is Carson Hartley. I am a web developer from the
					Calgary area in Alberta, Canada. I have a passion for creating
					things, sometimes from code, sometimes from wood.
				</p>
				
				<p>
					My current focus is learning web development, specifically front-end. My main area of focus is working with React, with an emphasis on designs that feel good to use and look the part.
				</p>
			</section>
			<img className='main-container' src={photo} alt="Photo of Me"></img>
		</div>
	);
}

export default AboutMe;

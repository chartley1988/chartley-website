import React from 'react';
import './about_me.css';
import photo from '../../../images/about_me_photo.jpg';

function AboutMe() {
	return (
		<div className='about-me'>
			<p className='main-container'>
				Hello! My name is Carson Hartley. I am a web developer from the
				Calgary area in Alberta, Canada. I have a passion for creating
				things, sometimes from code, sometimes from wood.
			</p>
			<hr />
			<p>
				
			</p>
			<img className='main-container' src={photo} alt="Photo of Me"></img>
		</div>
	);
}

export default AboutMe;

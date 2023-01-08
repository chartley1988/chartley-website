import React from 'react';
import './social_bar.css';
import twitterLogo from '/Users/chartley/Documents/Projects/chartley-website/src/images/Twitter social icons - circle - blue.svg';
import instaLogo from '/Users/chartley/Documents/Projects/chartley-website/src/images/Instagram_Glyph_Gradient_RGB.svg';

function SocialBar() {
	return (
		<div className='social-bar'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='currentColor'
				className='w-6 h-6'
			>
				<path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
				<path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
			</svg>

			<img src={twitterLogo}></img>
			<img src={instaLogo}></img>
		</div>
	);
}

export default SocialBar;

import solitaire_img from '../images/solitaire_screenshot.jpg';
import stacked_calculator_img from '../images/stacked-calculator.jpg';
import website_img from '../images/chartleys_website_screenshot.jpg';

const Data: Object[] = [
	{
		title: 'Solitaire',
		description:
			'Classic Solitaire! Built using vanilla Javascript. I had two main objectives with this project, the primary one was to learn to collaborate with another developer and learn the processes for sharing a github repo. The other was to learn a wider set of developer tools including webpack and linters, and refine the process of code splitting. The biggest challenges were probably the animations! It took a while to get them right, but I think they distinguish this version of Solitiare from many others out there. The ultimate purpose of this project is not actually Solitaire, but a framework for creating any card game, so future updates will concentrate on making more reusable components and functions for rapid prototyping.',
		image_src: solitaire_img,
		live_url: 'https://daver067.github.io/card-games/',
		github_url: 'https://github.com/Daver067/card-games',
		key_value: 'solitaire',
	},
	{
		title: 'Stacked Calculator',
		description:
			'A line based calculator. This is very early in development, and my intention is to focus on it once this site is complete. It will work kind of like a cross between a spreadsheet application and a calculator. You will have an infanite number of lines to build equations from, and the answers from those lines can be referenced in other lines. This allows for complex sequences of calculations. Eventually I would like to have the option to save sequences with user-set inputs to make the calculations like mini-apps in themselves.',
		image_src: stacked_calculator_img,
		live_url: 'https://chartley1988.github.io/chartleys-calculator/',
		github_url: 'https://github.com/chartley1988/chartleys-calculator',
		key_value: 'calculator',
	},
	{
		title: 'Chartley Designs',
		description:
			'This website is also a current project! Built with react using vite. This is really my first major foray into react. Uses react router to handle routing and URLs. The blog is powered by Sanity CMS as a backend. This website is also my first time using a CMS.',
		image_src: website_img,
		live_url: 'https://chartley1988.github.io/chartley-website/',
		github_url: 'https://github.com/chartley1988/chartley-website',
		key_value: 'website',
	},
];

export default Data;

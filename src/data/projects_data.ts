import solitaire_img from '../images/solitaire_screenshot.jpg';
import stacked_calculator_img from '../images/stacked-calculator.jpg';
import website_img from '../images/chartleys_website_screenshot.jpg';

const Data: Object[] = [
	{
		title: 'Solitaire',
		description:
			'Classic Solitaire! Built using vanilla Javascript. I had two main objectives with this project, the primary one was to learn to collaborate with another developer and learn the processes for sharing a github repo. The other was to learn a wider set of developer tools including webpack and linters, and refine the process of code splitting.',
		image_src: solitaire_img,
		live_url: 'https://daver067.github.io/card-games/',
		github_url: 'https://github.com/Daver067/card-games',
		key_value: "solitaire",
	},
	{
		title: 'Stacked Calculator',
		description: 'A line based calculator',
		image_src: stacked_calculator_img,
		live_url: 'https://chartley1988.github.io/chartleys-calculator/',
		github_url: 'https://github.com/chartley1988/chartleys-calculator',
		key_value: "calculator",
	},
	{
		title: 'Chartley Designs',
		description: 'This website is also a current project!',
		image_src: website_img,
		live_url: 'https://chartley1988.github.io/chartley-website/',
		github_url: 'https://github.com/chartley1988/chartley-website',
		key_value: "website",
	},
];

export default Data;

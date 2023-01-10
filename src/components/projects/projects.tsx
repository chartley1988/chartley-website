import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import projects_data from '/Users/chartley/Documents/Projects/chartley-website/src/data/projects_data.json';
import githubLogo from '/Users/chartley/Documents/Projects/chartley-website/src/images/github-mark.svg';

const iterate = (obj: Object) => {
	const objectArray: Object[] = [];
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			objectArray.push(obj[key]);
		}
	});
	return objectArray;
};

const projectArray = iterate(projects_data);

const listProjects = projectArray.map((project) => (
	<div className='project'>
		<div className='project-header'>
			<h2>{project.title}</h2>
			<div>
                <img src={githubLogo}></img>
            </div>
		</div>
		<div className='content-wrapper'>
			<p>{project.description}</p>
			<img src={project.image_src}></img>
		</div>
        <a href={project.live_url}>Check it out!</a>
	</div>
));

function Projects() {
	return (
		<div className='projects'>
			<h1>Projects</h1>
			<ul>{listProjects}</ul>
		</div>
	);
}

export default Projects;

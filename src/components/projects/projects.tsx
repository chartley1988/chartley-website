import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import projects_data from '../../data/projects_data';
import githubLogo from '../../images/github-mark.svg';

const iterate = (obj: any) => {
	const objectArray: Object[] = [];
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			objectArray.push(obj[key]);
		}
	});
	return objectArray;
};

const projectArray = iterate(projects_data);

const listProjects = projectArray.map((project: any) => (
	<li className='project' key={project.key_value}>
		<div className='project-header'>
			<h3>{project.title}</h3>
			<div>
                <a href={project.github_url}><img src={githubLogo} /></a>
            </div>
		</div>
		<div className='content-wrapper'>
			<p>{project.description}</p>
			<img src={project.image_src}></img>
		</div>
        <a href={project.live_url}>Check it out!</a>
	</li>
));

function Projects() {
	return (
		<div className='projects'>
			<h2>Projects</h2>
			<ul>{listProjects}</ul>
		</div>
	);
}

export default Projects;

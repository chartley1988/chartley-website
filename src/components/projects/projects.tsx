import React from "react";
import './projects.css'
import projects_data from "/Users/chartley/Documents/Projects/chartley-website/src/data/projects_data.json"

const iterate = (obj: Object) => {
    const objectArray: Object[] = [];
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
                objectArray.push(obj[key]);
        };
    })
    return objectArray;
}

const projectArray = iterate(projects_data);


const listProjects = projectArray.map(project =>
    <div className="project">
        <h2>{project.title}</h2>
        <div>
            <p>{project.description}</p>
            <img src={project.image_src}></img>
        </div>
    </div>
    )

function Projects () {
    return <div className="projects">
        <h1>Projects</h1>
        <ul>
            {listProjects}
        </ul>
    </div>

};

export default Projects

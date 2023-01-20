import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import "../styles/Projects.css"; 

function Projects() {
    

    return (
        <div className='projects'>
          <h1> My Personal Projects</h1> 
          <div className='projectList'>
            {ProjectList.map((project, ) => {return <ProjectItem skills={project.skills} name={project.name} image={project.image} git={project.git} url={project.url} />})}
          </div> 
        </div>
    )
}

export default Projects;




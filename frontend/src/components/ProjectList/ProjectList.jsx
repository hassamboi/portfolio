import './projectlist.css'
import React, { Fragment } from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectList({ projects }) {
  return (
    <Fragment>
      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects to display</p>
      )}
    </Fragment>
  )
}

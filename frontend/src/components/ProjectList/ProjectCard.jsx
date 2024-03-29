import React from 'react'
import Image from '../../assets/images/e-commerce-website.png'
import Avatar from './../Avatar/Avatar'

export default function ProjectCard({ project }) {
  return (
    <a className="project-card-wrapper" href={`${project.repoURL}`} target="_blank" rel="noopener noreferrer">
      <div className="project-card">
        <div className="project-card-top">
          <div className="avatar">
            <Avatar src={Image} width="50" height="50" />
          </div>
        </div>
        <h4 className="project-card-title">{project.title}</h4>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-technologies text-mono">
          {project.technologies.map((technology, index) => (
            <small key={index} className="project-card-technology">
              {technology}
            </small>
          ))}
        </div>
      </div>
    </a>
  )
}

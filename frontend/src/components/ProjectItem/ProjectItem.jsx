import React from 'react'

export default function ProjectItem({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {/* <p>{project.technologies}</p>
      <p>{project.area}</p> */}
    </div>
  )
}

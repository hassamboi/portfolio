import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProjectItem from '../components/ProjectItem/ProjectItem'
import { getProjects, reset } from './../features/projects/projectsSlice'

export default function Projects() {
  const dispatch = useDispatch()
  const { projects, isLoading, isError, message } = useSelector(state => state.projects)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    // get the projects from the server
    dispatch(getProjects())

    // reset the projects state when component unmounts
    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <main className="main-wrapper">
      <section id="projects">
        {projects.length > 0 ? (
          <div>
            {projects.map(project => (
              <ProjectItem key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <p>No projects to display</p>
        )}
      </section>
    </main>
  )
}

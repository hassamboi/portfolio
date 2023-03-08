import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProjectList from '../components/ProjectList/ProjectList'
import Spinner from '../components/Spinner/Spinner'
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
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <main className="main-wrapper">
      <section id="projects">
        <h1 className="section-title">Projects</h1>
        <ProjectList projects={projects} />
      </section>
    </main>
  )
}

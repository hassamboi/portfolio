import React, { useEffect, useState } from 'react'
import { getBlog, reset } from '../features/blogs/blogsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function BlogContent() {
  // get the event id from params
  const { id: param } = useParams()
  const params = param.split('-')
  const [id, setId] = useState(params[params.length - 1])
  const dispatch = useDispatch()
  const { blogs, isLoading, isError, message } = useSelector(state => state.blogs)

  useEffect(() => {
    if (isError) {
      console.log('oho error agsya')
      return
    }
    // get the blog from the server
    dispatch(getBlog(id))

    // reset the blogs state when component unmounts
    return () => {
      dispatch(reset())
    }
  }, [])

  if (isLoading) {
    return (
      <main className="main-wrapper">
        <h1>Loading</h1>
      </main>
    )
  }

  return (
    <main className="main-wrapper">
      <section id="blog-content">
        {blogs.length > 0 ? (
          <div>
            {blogs.map(blog => (
              <div key={blog._id}>
                <h1>{blog.title}</h1>
                {blog.sections.map(section => (
                  <div key={section._id}>
                    <h2>{section.name}</h2>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <h1>No blog content to display</h1>
        )}
      </section>
    </main>
  )
}

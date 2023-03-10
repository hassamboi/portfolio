import React, { useEffect } from 'react'
import { getBlog, reset } from '../features/blogs/blogsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import Spinner from '../components/Spinner/Spinner'

export default function BlogContent() {
  // get the event id from params
  const { id: param } = useParams()
  const params = param.split('-')
  const id = params[params.length - 1]

  const dispatch = useDispatch()
  const { blogs, isLoading, isError } = useSelector(state => state.blogs)

  useEffect(() => {
    if (isError) return

    // get the blog from the server
    dispatch(getBlog(id))

    // reset the blogs state when component unmounts
    return () => {
      dispatch(reset())
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <main className="main-wrapper">
      <section id="blog-content">
        {blogs.length > 0 ? (
          <div>
            {blogs.map(blog => (
              <Blog blog={blog} key={blog._id} />
            ))}
          </div>
        ) : (
          <h1>No blog content to display</h1>
        )}
      </section>
    </main>
  )
}

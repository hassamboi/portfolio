import React, { useEffect, useState } from 'react'
import { getBlog, reset } from '../features/blogs/blogsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { markBlogAsRead } from '../features/auth/authSlice'
import Blog from '../components/Blog/Blog'

export default function BlogContent() {
  // get the event id from params
  const { id: param } = useParams()
  const params = param.split('-')
  const id = params[params.length - 1]

  const dispatch = useDispatch()
  const { blogs, isLoading, isError, message } = useSelector(state => state.blogs)
  const { user } = useSelector(state => state.auth)

  const handleClick = () => {
    dispatch(markBlogAsRead(id))
  }

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
              <Blog blog={blog} key={blog._id} />
            ))}
            {user && !user.readBlogs.includes(id) && <button onClick={handleClick}>Mark Blog as Read</button>}
          </div>
        ) : (
          <h1>No blog content to display</h1>
        )}
      </section>
    </main>
  )
}

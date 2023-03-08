import React, { useEffect } from 'react'
import { getBlogs, reset } from '../features/blogs/blogsSlice'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard/BlogCard'
import Spinner from '../components/Spinner/Spinner'

export default function Blogs() {
  const dispatch = useDispatch()
  const { blogs, isLoading, isError, message } = useSelector(state => state.blogs)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    // get the blogs from the server
    dispatch(getBlogs())

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
      <section id="blogs">
        <h1 className="section-title">Blogs</h1>
        {blogs.length > 0 ? (
          <div>
            {blogs.map(blog => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <p>No blogs to display</p>
        )}
      </section>
    </main>
  )
}

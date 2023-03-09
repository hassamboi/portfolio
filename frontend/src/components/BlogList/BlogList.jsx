import React, { Fragment } from 'react'
import BlogCard from './BlogCard'
import './bloglist.css'

export default function BlogList({ blogs }) {
  return (
    <Fragment>
      {blogs.length > 0 ? (
        <div>
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <p>No blogs to display</p>
      )}
    </Fragment>
  )
}

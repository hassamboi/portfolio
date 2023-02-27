import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({ blog }) {
  const navigate = useNavigate()

  const handleClick = id => {
    navigate(`/blogs/${id}`)
  }

  return (
    <div
      onClick={() => handleClick(blog.title.replace(/\s+/g, '-').toLowerCase() + `-${blog._id}`)}
      style={{ border: '2px solid white' }}
    >
      <h3>{blog.title}</h3>
      <div>
        {blog.sections.map(section => (
          <Fragment key={section._id}>
            <h4>{section.name}</h4>
            <p>{section.content}</p>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

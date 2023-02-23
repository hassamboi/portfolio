import React, { Fragment } from 'react'

export default function BlogCard({ blog }) {
  return (
    <div>
      <h3>{blog.title}</h3>
      <div>
        {blog.sections.map(section => (
          <Fragment>
            <h4>{section.name}</h4>
            <p>{section.content}</p>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

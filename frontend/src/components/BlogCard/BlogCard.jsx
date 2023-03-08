import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/images/dummy_project_avatar.jpg'
import './bloglist.css'

export default function BlogCard({ blog }) {
  const navigate = useNavigate()
  const date = new Date()
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  const handleClick = id => {
    navigate(`/blogs/${id}`)
  }

  return (
    <div onClick={() => handleClick(blog.title.replace(/\s+/g, '-').toLowerCase() + `-${blog._id}`)} className="blog-card">
      <div className="blog-card-image">
        <img src={Image} alt="blog banner" />
      </div>
      <div className="blog-card-content">
        <h4 className="blog-card-title">{blog.title}</h4>
        <p className="blog-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, doloribus laboriosam numquam eius ratione nostrum nam
          iure perferendis illo at soluta! Facere ex deleniti, aperiam exercitationem esse ipsam mollitia repellendus?
        </p>
        <div className="blog-card-meta">
          <small>HASSAM</small>
          <small>{formattedDate}</small>
        </div>
      </div>
      {/* <div>
        {blog.sections.map(section => (
          <Fragment key={section._id}>
            <h4>{section.name}</h4>
            <p>{section.content}</p>
          </Fragment>
        ))}
      </div> */}
    </div>
  )
}

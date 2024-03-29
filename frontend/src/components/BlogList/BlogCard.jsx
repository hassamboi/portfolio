import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/images/dummy_blog_banner.jpg'
import { useSelector } from 'react-redux'

export default function BlogCard({ blog }) {
  const navigate = useNavigate()
  const date = new Date()
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)
  const [isRead, setIsRead] = useState(false)

  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    if (user && user.readBlogs.includes(blog._id)) {
      setIsRead(true)
    }
  }, [user, isRead, setIsRead])

  const handleClick = id => {
    navigate(`/blogs/${id}`)
  }

  return (
    <div
      onClick={() => handleClick(blog.title.replace(/\s+/g, '-').toLowerCase() + `-${blog._id}`)}
      className={`blog-card ${isRead ? 'blog-read' : ''}`}
    >
      <div className="blog-card-image">
        <img src={Image} alt="blog banner" />
      </div>
      <div className="blog-card-content">
        <h4 className="blog-card-title">{blog.title}</h4>
        <p className="blog-card-description">{blog.description}</p>
        <div className="blog-card-meta">
          <small>{blog.author.toUpperCase()}</small>
          <small>{formattedDate}</small>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './blog.css'
import Avatar from './../Avatar/Avatar'
import AvatarImage from '../../assets/images/dummy_project_avatar.png'
import Image from '../../assets/images/dummy_blog_banner.jpg'
import { markBlogAsRead } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Blog({ blog }) {
  // date formatting for the blog
  const date = new Date(blog.createdAt)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  //  mark blog as read
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleClick = () => {
    dispatch(markBlogAsRead(blog._id))
  }

  return (
    <article className="blog">
      {blog.categories.map((category, index) => (
        <span key={index} className="colored">
          {category}
        </span>
      ))}
      <h1 className="blog-title">{blog.title}</h1>

      <div className="blog-subheader">
        <div className="blog-subheader-left">
          <Avatar src={AvatarImage} width="36" height="36" />
          <div className="blog-subheader-left-meta">
            <span className="blog-subheader-left-author">{blog.author}</span>
            <span className="blog-subheader-left-date">{formattedDate}</span>
          </div>
        </div>
        <div className="blog-subheader-right">
          {user && !user.readBlogs.includes(blog._id) && (
            <span className="btn" onClick={handleClick}>
              Mark Blog as Read
            </span>
          )}
        </div>
      </div>

      <figure>
        <img className="blog-banner" src={Image} alt={`blog banner`} />
      </figure>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </article>
  )
}

import React from 'react'
import './blog.css'
import Avatar from './../Avatar/Avatar'
import Image from '../../assets/images/dummy_project_avatar.jpg'

export default function Blog({ blog }) {
  const date = new Date()
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  return (
    <article className="blog">
      <span className="colored">Category</span>
      <h1 className="blog-title">{blog.title}</h1>

      <div className="blog-subheader">
        <div className="blog-subheader-left">
          <Avatar src={Image} width="36" height="36" />
          <div className="blog-subheader-left-meta">
            <span className="blog-subheader-left-author">Hassam Ud Din</span>
            <span className="blog-subheader-left-date">{formattedDate}</span>
          </div>
        </div>
        <div className="blog-subheader-right">right content</div>
      </div>

      <figure>
        <img className="blog-banner" src={Image} alt={`blog banner`} />
      </figure>

      <p className="blog-section-content blog-introduction">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat dolorum eaque vero voluptatem iste animi nobis
        aspernatur non? Similique autem voluptas dolorem quod repellat velit aperiam sequi soluta dolores.
      </p>

      {blog.sections.map(section => (
        <div className="blog-section" key={section._id}>
          <h3 className="blog-section-title">{section.name}</h3>
          <p className="blog-section-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempora ullam nulla cumque, cum perspiciatis
            laboriosam maiores ad eius consectetur veritatis quibusdam nostrum aliquid ipsa eum ex suscipit eos ab. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Beatae quae illo provident non, natus accusantium, officia repudiandae
            suscipit praesentium itaque tempore. Eius illum alias libero id illo. Incidunt, voluptate similique. Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
      ))}
      <div className="blog-section">
        <h3 className="blog-section-title">My second section of the first blog</h3>
        <p className="blog-section-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempora ullam nulla cumque, cum perspiciatis laboriosam
          maiores ad eius consectetur veritatis quibusdam nostrum aliquid ipsa eum ex suscipit eos ab. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Beatae quae illo provident non, natus accusantium, officia repudiandae suscipit
          praesentium itaque tempore. Eius illum alias libero id illo. Incidunt, voluptate similique. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
    </article>
  )
}

import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="hero">
      <span className="colored">Hello there!</span>
      <h1 className="hero-title">Software engineer, advisor, and creator.</h1>
      <p className="hero-about section-content">
        I'm Hassam, a software engineer with a passion for developing efficient and innovative software solutions. With expertise
        in programming and problem-solving, I am committed to delivering high-quality results that drive business success.
      </p>
      <div className="hero-action-wrapper">
        <Link to="/signin" className="btn hero-action">
          Subscribe to my blogs!
        </Link>
      </div>
    </section>
  )
}

import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="hero">
      <span className="colored">Hi, my name is</span>
      <h1 className="hero-title">Hassam Ud Din.</h1>
      <h1 className="hero-subtitle">I develop things for the web.</h1>
      <p className="hero-about section-content">
        I am a software engineer with a passion for developing efficient and innovative software solutions. With expertise in
        programming, project management, and problem-solving, I am committed to delivering high-quality results that drive
        business success.
      </p>
      <div className="hero-action-wrapper">
        <Link to="/signin" className="btn hero-action">
          Subscribe to my blogs!
        </Link>
      </div>
    </section>
  )
}

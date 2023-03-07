import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import Image from '../../assets/images/dummy_project_avatar.jpg'
import './navbar.css'
import Avatar from './../Avatar/Avatar'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header>
      <nav className="main-navbar">
        <div className="main-navbar-avatar">
          <Avatar image={Image} width="40" height="40" />
        </div>
        <h3 className="main-navbar-title">
          <Link to="/">Hassam's Devlog</Link>
        </h3>
        <div className="main-navbar-buttons">
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          {user ? (
            <span className="btn" onClick={onLogout}>
              Log out
            </span>
          ) : (
            <Link to="/signin" className="btn">
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

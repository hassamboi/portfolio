import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

import './header.css'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className="main-wrapper">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul className="nav-links-list">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          {!user && (
            <Fragment>
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
      {user && (
        <button className="btn-link" onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  )
}

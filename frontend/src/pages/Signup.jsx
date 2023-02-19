import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })
  const { name, email, password, password2 } = formData

  // handling redux state
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  // change the states based on user input
  const onChange = e => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  // submit form data
  const onSubmit = e => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = { name, email, password }
      dispatch(register(userData))
    }
  }

  // take action based on the results from api hit
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <main className="main-wrapper">
      <section id="signup">
        <div className="box">
          {/* avatar/logo */}
          <h1>Sign up</h1>
          <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" value={name} placeholder="Full name" onChange={onChange} required />
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={onChange} required />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              placeholder="Confirm Password"
              onChange={onChange}
              required
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

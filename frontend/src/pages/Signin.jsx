import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner/Spinner'
import { login, reset } from '../features/auth/authSlice'

export default function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData

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
    const userData = { email, password }
    dispatch(login(userData))
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
    return <Spinner />
  }

  return (
    <main className="main-wrapper">
      <section id="signin">
        <div className="box">
          {/* avatar logo */}
          <h1>Sign in</h1>
          <form onSubmit={onSubmit}>
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
            <input type="submit" className="form-btn" />
          </form>
        </div>
      </section>
    </main>
  )
}

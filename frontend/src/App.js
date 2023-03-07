import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Fragment } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import Signup from './pages/Signup'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import BlogContent from './pages/BlogContent'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogContent />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  )
}

export default App

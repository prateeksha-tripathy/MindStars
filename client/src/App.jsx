import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element = {<PrivateRoute />}>                            {/* to make dashboard private (not accessible when signed out) */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> 
        <Route element = {<OnlyAdminPrivateRoute />}>                   {/* to make dashboard private (not accessible when signed out) */}
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

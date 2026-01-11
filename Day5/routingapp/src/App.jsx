import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Login from './components/Login'
export default function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/profile' element={<Profile/>} />
         <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

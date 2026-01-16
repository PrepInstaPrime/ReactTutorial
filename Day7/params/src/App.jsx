import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Course from './components/Course.jsx'
import Home from './pages/Home.jsx'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:course" element={<Course />} />
      </Routes>
    </div>
  )
}

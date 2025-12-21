import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Contact from './componets/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App

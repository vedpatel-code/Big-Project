import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Contact from './componets/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/contact/73sds129dfdw3424sds' element={<Contact />}/>
        <Route path='/privacy/545dfsd4454sdf44df5' element={<PrivacyPolicy />}/>
        <Route path='/terms/234lf234nnjo2o3o6n22ljn' element={<Terms />}/>
        <Route path='/projects/jh2345kjh334hhk2i343er' element={< Projects/>} />
        <Route path='/skills/08wa3sdw06dd5v0qe9qw42' element={<Skills />}/>
        

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App

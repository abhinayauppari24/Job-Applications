import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/student/Navbar'
import Home from './components/student/Home'
import Internship from './components/student/Internship'
import Job from './components/student/Job'
import Applied from './components/student/Applied'
import InternshipsPage from './components/admin/InternshipsPage'
import JobsPage from './components/admin/JobsPage'
import OtpInput from './components/pages/OtpInput'

const App = () => {
  return(
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student/Internship' element={<Internship />} />
          <Route path='/job' element={<Job />} />
          <Route path='/applied' element={<Applied />} />
          <Route path='/internshipspage' element={<InternshipsPage />} />
          <Route path='/jobspage' element={<JobsPage />} />
          <Route path="/otpinput" element={<OtpInput />} />
       </Routes>
    </div>
  )
  
}

export default App

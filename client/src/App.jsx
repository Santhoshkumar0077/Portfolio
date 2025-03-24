import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <BrowserRouter>
      <div className='bg-dark position-fixed w-100 text-white p-3 d-flex justify-content-around align-items-center shadow' style={{ cursor: "pointer" }}>
        <a href="/" className='w-75 text-decoration-none text-white' >Santhoshkumar portfolio</a>
        <a href='/' className='d-none d-lg-block text-decoration-none text-white'>Home</a>
        <a href='/projects' className='d-none d-lg-block text-decoration-none text-white'>Projects</a>
        <a href='/contact' className='d-none d-lg-block text-decoration-none text-white'>Contact us</a>
        <div className='d-lg-none fs-5 cursor-pointer' ><FiAlignJustify onClick={() => setSidebar(!sidebar)} /></div>
        {sidebar && <div className='position-fixed top-0 start-0 w-100 bg-dark text-white p-4 d-lg-none text-center' style={{ height: "100vh", zIndex: 1000 }}>
          <div className='text-end'><FiX className="m-3 fs-3" onClick={() => setSidebar(false)} style={{ cursor: "pointer" }} /></div>
          <a href='/' className='d-block text-decoration-none text-white mb-3' onClick={() => setSidebar(false)}>Home</a>
          <a href='/projects' className='d-block text-decoration-none text-white mb-3' onClick={() => setSidebar(false)}>Projects</a>
          <a href='/contact' className='d-block text-decoration-none text-white' onClick={() => setSidebar(false)}>Contact Us</a>
        </div>}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

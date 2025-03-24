import React from 'react'
import ProfileImage from "../assets/msk.jpg"

const Home = () => {
  return (
    <>
      <div className='p-5 bg-primary text-white row fs-5'>
        <div className='p-4 fs-3 text-center'>Welcome to Portfolio</div>
        <div className='p-1'>Hi, I'm Santhoshkumar, a Full-Stack Developer specializing in building scalable and interactive web applications using the MERN stack</div>
        <div className='p-1'>Building Scalable & Interactive Web Solutions</div>
        <div className="p-1">I specialize in front-end and back-end development using React.js, Redux Toolkit, Express.js, and MongoDB. Let’s build something amazing!</div>
      </div>
      <div className='container-fluid p-5 '>
        <div className="row">
          <div className='col-6 d-flex justify-content-center align-items-center'>
            I’m a Full-Stack Developer with a strong foundation in front-end and back-end technologies. I love solving problems and bringing innovative solutions to life.
          </div>
          <div className='col-6 d-flex justify-content-center align-items-center'>
            <img src={ProfileImage} alt="Profile" width={150} height={230} className='rounded-circle' />
          </div>
        </div>
      </div>
      <div className='p-5 bg-secondary row'>
        <div className='col-12 pb-4'><h1 >Skills</h1></div>
        <div className='col-sm-12 col-lg-4'><h4 >Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>Bootstrap</li>
          </ul></div>
        <div className='col-sm-12 col-lg-4'><h4>BackEnd</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
          </ul></div>
        <div className='col-sm-12 col-lg-4'>
          <h4>Tools & Platforms</h4>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Vercel</li>
            <li>Render</li>
            <li>Postman</li>
            <li>
              VS code
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-dark p-4 text-center text-white row'>
        <a href="mailto:santhoshkuarmanoharan07@gmail.com" className='text-decoration-none text-white p-4'>📩 Email: santhoshkuarmanoharan07@gmail.com</a>
        <p className='text-decoration-none text-white p-3'>📍 Location: Madurai, India</p>
        <a href="https://www.linkedin.com/in/santhosh-kumar-1a3a76337" className='text-decoration-none text-white p-4'>☕ Click to connect on LinkedIn</a>
        <p className='text-decoration-none text-white p-3'>© 2025 Santhoshkumar. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Home

import React from 'react'

const Projects = () => {
    return (<>
        <div className='p-5 bg-primary text-white row shadow row fs-5'>
            <h3 className='p-3 fs-3 text-center'>My Projects</h3>
            <div className='p-1'>Things I’ve Built</div>
            <div className='p-1'>Showcasing My Work</div>
            <div className='p-1'>Here are some of my recent projects, built using modern web technologies like React.js, Redux, Express.js, and MongoDB</div>
        </div>
        <div className='p-4 d-flex flex-column gap-5'>
            <div className='shadow-lg p-3 d-flex flex-column gap-3 bg-body-tertiary rounded border border-2'>
                <h3>Chat App</h3>
                <h4>Features:</h4>
                <div>Real-time Messaging – Instant communication using WebSockets (Socket.IO).</div>
                <div>User Authentication – Secure login & registration.</div>
                <h4>Tech Stack Used:</h4>
                <div>Frontend: React.js, Redux Toolkit, RTK Query, Bootstarp</div>
                <div>Backend: Node.js, Express.js, MongoDB, Socket.IO</div>
                <div>Authentication: JWT (JSON Web Tokens)</div>
                <h4>Links:</h4>
                <a href="https://message-eight-chi.vercel.app" className='text-decoration-none fs-6'>Live Demo</a>
                <a href="https://github.com/Santhoshkumar0077/chatApp" className='text-decoration-none fs-6'>Git repository</a>
            </div>
            <div className='shadow-lg p-3 d-flex flex-column gap-3 bg-body-tertiary rounded border border-2'>
                <h3>E-commerce Web site</h3>
                <h4>Features:</h4>
                <div>Product Listing – Users can browse available products.</div>
                <div>Product Details Page – Shows product image, description, and price.</div>
                <div>Contact Page – Users can reach out for inquiries.</div>
                <h4>Tech Stack Used:</h4>
                <div>Frontend: React.js, Bootstarp</div>
                <div>Backend: Node.js, Express.js, MongoDB</div>
                <div>Authentication: JWT (JSON Web Tokens)</div>
                <h4>Links:</h4>
                <a href="https://e-commerce-eight-omega-98.vercel.app/" className='text-decoration-none fs-6'>Live Demo</a>
                <a href="https://github.com/Santhoshkumar0077/E-commerce" className='text-decoration-none fs-6'>Git repository</a>
            </div>
            <div className='shadow-lg p-3 d-flex flex-column gap-3 bg-body-tertiary rounded border border-2'>
                <h3>Notes app</h3>
                <h4>Features:</h4>
                <div>Notes list: Notes will be displayed that created by user</div>
                <div>CURD operation: User can create, read and update and delete notes.</div>
                <div>Authentication: User details are authenticated. only user can see their page with credentials. </div>
                <h4>Tech Stack Used:</h4>
                <div>Frontend: React.js, Bootstarp</div>
                <div>Backend: Node.js, Express.js, MongoDB</div>
                <div>Authentication: JWT (JSON Web Tokens)</div>
                <h4>Links:</h4>
                <a href="https://notes-hj5o.onrender.com" className='text-decoration-none fs-6'>Live Demo</a>
                <a href="https://github.com/Santhoshkumar0077/notes" className='text-decoration-none fs-6'>Git repository</a>
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

export default Projects

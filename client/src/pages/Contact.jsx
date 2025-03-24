import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMesssage] = useState('');

    return (
        <>
            <div className='p-5 bg-primary text-white row shadow row fs-5'>
                <h3 className='p-3 fs-3 text-center'>Let’s Connect</h3>
                <div className='p-1'>Contact Me</div>
                <div className='p-1'>Have a question or want to work together? Feel free to reach out!</div>
                <div className='p-1'>Looking for a developer or have a project idea? Let’s talk!</div>
            </div>
            <div className='d-flex flex-column gap-2 p-4 row'>
                <h4 >Contact Information</h4>
                <a className='text-decoration-none' href='mailto:santhoshkumarmanoharan07@gmail.com'>📩 Email : santhoshkuarmanoharan07@gmail.com</a>
                <a className='text-decoration-none' href="tel:+917538807649">📞 Phone : 7538807649</a>
                <p>📍 Location: Madurai, India</p>
                <p>🔗 Social Links:</p>
                <a className='text-decoration-none' href="https://www.linkedin.com/in/santhosh-kumar-1a3a76337/">LinkedIn</a>
                <a className='text-decoration-none' href="https://github.com/Santhoshkumar0077">GitHub</a>
            </div>
            <div className='row p-3 bg-secondary'>
                <form className='bg-light p-4 rounded shadow-lg col-sm-12 col-lg-6 mx-auto' onSubmit={e => {
                    e.preventDefault()
                    alert("sumitted successfully")
                }}>

                    <h3>Contact Form</h3>

                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" id="name" name="name" className='form-control' placeholder='Enter name...' required />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id="email" name="email" className='form-control' placeholder='Enter email...' required />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="message" className='form-label'>Message</label>
                        <textarea id="message" name="message" className='form-control' placeholder='Enter message...' required></textarea>
                    </div>

                    <button className='btn btn-primary' type='submit'>Submit</button>

                </form>

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

export default Contact

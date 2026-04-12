import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="w-full max-w-350 mx-auto footer sm:footer-horizontal bg-base-200 text-base-content py-10">
                <aside>
                    <Link to='/' className="text-3xl font-extrabold ">Book Breeze</Link>
                    <p className='text-lg'>
                        Book Breeze Inc.
                        <br />
                        Connecting readers with great stories since 1993.
                    </p>
                </aside>
                <nav className='text-lg'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='text-lg'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text-lg'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>


            </footer>
            <div className='bg-black text-gray-100 text-center py-3 text-lg'>
                &copy; {new Date().getFullYear()} Book Breeze. All rights reserved.
            </div>
        </div>

    )
}

export default Footer
import React from 'react'
import { Link, NavLink } from 'react-router'

const NavBar = () => {
    return (
        <div>
            <div className="w-full max-w-292.5 mx-auto navbar bg-base-100">

                {/* nav left */}
                <div className="navbar-start">
                    {/* mobile nav */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-black">Book Breeze</Link>
                </div>
                {/* nav center/desktop nav  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({isActive})=> `${isActive ? 'text-theme-primary border border-theme-primary' : ''}`}>Home</NavLink></li>
                        <li><NavLink to='/listed-books' className={({isActive})=> `${isActive ? 'text-theme-primary border border-theme-primary' : ''}`}>Listed Books</NavLink></li>
                        <li><NavLink to='/pages-to-read' className={({isActive})=> `${isActive ? 'text-theme-primary border border-theme-primary' : ''}`}>Pages to Read</NavLink></li>
                        {/* dropdown */}
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>

                {/* nav right */}
                <div className="navbar-end">
                    <a className="btn bg-theme-primary text-white mr-2">Sign In</a>
                    <a className="btn bg-theme-secondary text-white">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
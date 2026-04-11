import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const RootLayout = () => {
    return (
        <>

            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer
                position="bottom-left"
                theme="dark"
            />
        </>
    )
}

export default RootLayout
import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default App

import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { jwtDecode } from 'jwt-decode';
const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const payload = jwtDecode(token)
        const expirationDate = new Date(payload.exp * 1000);
        if (expirationDate < new Date()) {
            localStorage.removeItem('token');
            return <Navigate to="/" />;
        }
    } return (
        token ? <Outlet /> : <Navigate to="/" />)
}

export default PrivateRoute

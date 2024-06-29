import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './../NavBar/NavBar';



export default function Root() {
    return (
        <div>
           
            <Outlet></Outlet>
            
        </div>
    )
}

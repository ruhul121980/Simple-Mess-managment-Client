import React from 'react'
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';


import Login from './components/Login/Login';
import RoomForm from './components/Home/RoomForm.jsx';
import RoomDetails from './components/Home/RoomDetails';
import AddMemberForm from './components/Members/AddMemberForm.jsx';

import RoomForNav from './components/Home/RoomForNav.jsx';
import DetailsMember from './components/Members/DetailsMember.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Login></Login>

      },
      {
        path:'/home',
        element:<Home></Home>
      },
     
      
      {
        path:'/create-room',
        element:<RoomForm></RoomForm>
      },
      {
        path:'/room-details/:id',
        element:<RoomDetails></RoomDetails>
      },
      {
        path:'room',
        element:<RoomForNav></RoomForNav>
      },
      {

        path:'/add-member/:id',
        element:<AddMemberForm></AddMemberForm>
      },
      {
        path:'/member-details/:id',
        element:<DetailsMember></DetailsMember>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

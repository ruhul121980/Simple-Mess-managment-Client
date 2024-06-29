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

import DiscussionForum from './components/DiscussionForum/DiscussionForum.jsx';
import Login from './components/Login/Login';
import RoomForm from './components/Home/RoomForm.jsx';



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
        path:'/discussion',
        element:<DiscussionForum></DiscussionForum>
      },
      {
        path:'/create-room',
        element:<RoomForm></RoomForm>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

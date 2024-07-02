import React from 'react'
import { Link } from 'react-router-dom'
import TableRoom from './TableRoom'
import NavBar from '../NavBar/NavBar'

export default function RoomForNav() {
  return (
    <div>
        <NavBar></NavBar>
       <div>
      <h1 className='text-center text-5xl text-purple-500'>ROOM</h1>
     <div className='my-10 text-center'>
     <Link to="/create-room"> <button className="btn bg-purple-500 btn-wide">Create Room</button></Link>
     </div>

     <TableRoom></TableRoom>
    </div>
    </div>
  )
}

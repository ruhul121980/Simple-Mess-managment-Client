import React from 'react'
import { Link } from 'react-router-dom'

export default function Room() {
  return (
    <div>
      <h1 className='text-center text-5xl text-purple-500'>ROOM</h1>
     <Link to="/create-room"> <button className="btn bg-purple-500 btn-wide">Create Room</button></Link>
    </div>
  )
}

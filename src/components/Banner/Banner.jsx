import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className="hero min-h-96 w-11/12 mx-auto bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img className='w-72 h-80' src="/images/pngwing 1.png" />
      <div>
        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
        
        <Link to="/listedBooks"><button className="btn bg-[#23BE0A] text-white mt-10">View The List</button></Link>
      </div>
    </div>
  </div>
  )
}

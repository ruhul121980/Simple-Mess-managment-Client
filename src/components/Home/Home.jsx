import React from 'react'
import Banner from '../Banner/Banner'
import NavBar from '../NavBar/NavBar'
import Room from './Room'


export default function Home() {
  return (
   
    <div className=''> 
    
    <NavBar></NavBar>
      <Banner></Banner>
      <div className='my-6'>
      <Room></Room>
      </div>
     
      
      
    </div>
  )
}

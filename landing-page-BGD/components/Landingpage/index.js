import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Services from '../Services';
import Trust from '../Trust';
import Trends from '../Trends';
import Original from '../Business/original';
import { Recover } from '../Recover';
import Krat from '../Krat';




const Landingpage = () => {
  return (
    <>
      <div className='w-screen relative flex justify-between z-50'>
        <Navbar />
      </div>
      <div className='relative'>
        <Banner />
      </div>
      <div className='relative'>
        <Services />
      </div>

      <Trust />

      <Trends />

      

      <Original />
      <Recover />



    </>
  )
}

export default Landingpage;
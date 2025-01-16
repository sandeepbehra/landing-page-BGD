import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Services from '../Services';
import Trust from '../Trust';
import Trends from '../Trends';
import Original from '../Business/original';
import { Recover } from '../Recover';
import Logoslider from '../Logoslider';
import DevelopersSlider from '../Devloper';
import Scaling from '../Scaling';







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
      <Logoslider/>
      </div>
      <div className='relative'>
        <Services />
      </div>
      <div className='relative'>
      <Trust />
      </div>
      <div className='relative'>
      <DevelopersSlider/>
      </div>
      <div className='relative'>
      <Scaling/>
      </div>
      



{/* 
      <Trends />

      

      <Original />
      <Recover /> */}

    
    
     
     {/* <Gallery/> */}

    </>
  )
}

export default Landingpage;
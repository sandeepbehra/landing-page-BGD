import { navData } from '@/uitls/constant';
import React from 'react'

const Navbar = () => {
  return (

    <nav className='w-screen md:w-full  bg-white fixed flex justify-between items-center border-b-2 border-b-slate-200'>
    <div className='ml-11 '><a className='' href='#'>
     <img 
       src='/logo.webp'
       alt='logo'
       className='w-[100px]  object-contain cursor-pointer'/>
    </a>
    </div> 

    <div className='flex justify-between gap-4 '>
      {
         navData.map((data)=><div key={data} className='text-gray-400 font-sans hidden md:block'>{data}</div>)
      }
    </div>

    <button className='bg-logobtbcolor hidden md:block mr-8 w-[120px] h-[45px] rounded-xl text-white font-semibold font-sans text-center '>
      Get in Touch
     </button>

     <div className='block md:hidden '>
      <a href='#' className='text-4xl'>&#8801;</a>
     </div>
 </nav>









        // <nav className='w-full grid grid-cols-12 items-center md:px-8 px-6 py-4 fixed z-50 border-black bg-white'>
        //    <a className='col-span-2 ' href='#'>
        //     <img 
        //       src='/logo.webp'
        //       alt='logo'
        //       className='h-10 md:h-12 w-auto object-contain cursor-pointer'/>
        //    </a>
        //    <div className='col-span-8 lg:flex gap-8 mx-auto cursor-pointer'>
        //      {
        //         navData.map((data)=><div key={data}>{data}</div>)
        //      }
        //    </div>
        //    <button className='px-4 py-4 w-40 border to-black rounded-lg hover:bg-neutral-400 transition-all duration-300'>
        //      Get in Touch
        //     </button>
        // </nav>
  )
}

export default Navbar;
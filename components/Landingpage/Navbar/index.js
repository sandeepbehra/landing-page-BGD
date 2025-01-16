"use client"
import { navData } from '@/uitls/constant';


import SidebarComponent from '@/components/Sidebar';
import ModalComponent from '@/components/Modal';




import React, { useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';



import { IoMdArrowForward } from 'react-icons/io';

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSidebarVisiblity = () => {
      setSidebar((prev) => !prev);
  };




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
         navData.map((data)=><div key={data} className='text-gray-400 font-sans hidden md:block cursor-pointer '>{data}</div>)
      }
    </div>

    <button className='bg-logobtbcolor hidden md:block mr-8 w-[120px] h-[45px] rounded-xl text-white font-semibold font-sans text-center '>
      Get in Touch
     </button>

     <div className='block md:hidden '>
      <a href='#' className='text-4xl' >&#8801;</a>
     </div>


{/* <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300" 
                onClick={handleSidebarVisiblity}
                aria-label="Toggle menu"
            >
                <RxHamburgerMenu className={`${!sidebar ? 'block':'hidden'} text-3xl`} />
                <RxCross1 className={`${sidebar ? 'block':'hidden'} text-3xl`}  />
            </button>

            {sidebar && <SidebarComponent sidebar={sidebar} setSidebar={setSidebar} />}
            {openModal && <ModalComponent otpForm={otpForm} openModal={openModal} setOpenModal={setOpenModal} />} */}
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
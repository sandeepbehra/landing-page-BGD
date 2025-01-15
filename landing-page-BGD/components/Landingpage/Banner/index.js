import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
const Banner = () => {
    const searchButton = [
        {name:"Google.com",icon:<FcGoogle />},
        {name:"Facebook.com",icon:<FaFacebook />},
        {name:"Twitter.com",icon:<FaSquareXTwitter />}
    ];
  return (
    <div className=' md:px-8 px-6 py-0 flex justify-around lg:gap-x-10 items-center h-[100vh]'>
        {/* <div className='mt-32 w-1/2'> */}
        <div className='mt-32 w-screen md:w-1/2'>
            <h1 className='text-3xl md:text-5xl p-2'>Discover Your Business</h1>
            <h1 className='text-3xl md:text-5xl p-2'>SEO Solutions.</h1>
            <p className='p-2 text-slate-400'>Maecenas egret risks qualm Cohabiter diapaus magna egret vehicular
              pellentesque lobortis iaculis felis viverra sit amet.
            </p>
            {/* <div className='h-14 border bg-red-600 w-screen md:w-full wrap md:nowrap to-slate-950 flex justify-center items-center rounded-md'>
               <IoIosSearch className='ml-4 text-2xl  md:text-5xl'/>
                
                <input type='text'  placeholder='Analyze any website or App' className='mr-60 outline-none ml-10  w-screen md:w-full'/>
                <button className='border to-slate-950 px-0 py-0 md:px-4 md:py-2 rounded-md bg-zinc-600 text-white mr-4 w-[60px] h-[45px]'>Search</button>
            </div> */}


<div className="h-14 border bg-gray-300 w-full flex flex-wrap md:flex-nowrap justify-center items-center rounded-md p-2">
  <IoIosSearch className="text-2xl md:text-4xl text-white ml-2 md:ml-4" />

  <input 
    type="text" 
    placeholder="Analyze any website or App" 
    className="flex-grow outline-none bg-transparent text-white placeholder-white px-4 py-2 md:py-0 w-full md:w-auto"
  />

  <button 
    className="border px-4 py-2 rounded-md bg-zinc-600 text-white mt-2 md:mt-0 md:ml-4 w-full md:w-auto"
  >
    Search
  </button>
</div>

            <div className='flex p-2 gap-3 '>
                <h2 className='py-2'>Popular:</h2>
               {
                searchButton.map((item)=><button className=' overflow-scroll border to-black rounded-md px-4 py-2 flex justify-center items-center gap-2' key={item}>{item.icon}{item.name}</button>)
               }
            </div>
            
        </div>
        <div className='pt-24 h-[calc(100vh)] overflow-y-hidden hidden md:block'>
            <img src='/ranking.webp' alt='reaking' className='w-full animate-bounce-y'/>
        </div>
    </div>
  )
}

export default Banner;
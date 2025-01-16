'use client'
import React, { useState } from 'react'

const Services = () => {
    const [selectedIndex,setSelectedIndex] = useState(0);
    const handlerClick = (index)=>{
            setSelectedIndex(index);
            console.log(index);

    }
    const serviceData = [
        {
            name:" Branding That Commands Attention",
            // icon:<TbWorldSearch />,
            title:"Build a brand that stands out.",
            value:["Our expertise ensures your real estate projects shine with striking visuals and a unique identity that connects with your audience."]
        },
        {
            name:" Marketing That Drives Expansion",
            // icon:<TbReportAnalytics />,
            title:"Fueling Growth with Scalable Strategies",
            value:["Every campaign is optimised for success, driving attention to your projects and delivering measurable, impactful results."]
            
        },
        {
            name:"Automation That Delivers",
            // icon:<MdOutlineSocialDistance />,
            title:"Achieve Effortless Growth with the #1 PropTech Solution",
            value:["Our systems streamline communication, nurture leads, and drive conversions—leaving you more time to focus on scaling."]
        } 
    ];
    

  return (
    <div className=' border bg-gray-50 to-white  rounded-3xl md:px-8 px-6 py-0  m-4 -mt-4 flex flex-col '>
        <div className='flex md:flex-nowrap px-0 w-full flex-wrap m-0 '>
                {
                    serviceData.map((data,index)=><div className={`p-6 w-screen border-r-2 border-solid border-r-gray-300 border-b-2  border-b-gray-300 cursor-pointer hover:text-white hover:bg-gray-900 ${selectedIndex === index?"bg-gray-900 text-white":""}`} key={index} onClick={()=>handlerClick(index)}>{data.name}</div>)
                }
        </div>
        <div className='p-20 flex justify-between gap-x-80'>
            <div>
                    <div>
                            {serviceData.map((data, index) => (
                                selectedIndex === index ? <h1 key={index} className='text-2xl md:text-4xl m-4 mx-auto -ml-11'>{data.title}</h1> : null
                            ))}
                    </div>
                    <div className='mt-7 m-4 mx-auto '>
                            {serviceData.map((data, index) => (
                                selectedIndex === index ? (
                                    <ul key={index} className='list-disc list-outside m-4 mx-auto text-slate-700'>
                                        {data.value.map((v, i) => (
                                            <li key={i}>{v}</li>
                                        ))}
                                    </ul>
                                ) : null
                            ))}
                    </div>
            </div>
            <div>
                    <img
                    src='/about.webp'
                    alt='about'/>
            </div>
        </div>
    </div>
  )
}

export default Services;

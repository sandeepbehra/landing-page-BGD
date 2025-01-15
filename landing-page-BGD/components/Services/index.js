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
            name:"Search Engine",
            // icon:<TbWorldSearch />,
            title:"Tailored SEO Solutions Boost Your Business.",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]
        },
        {
            name:"Analytics",
            // icon:<TbReportAnalytics />,
            title:"Customized SEO Strategies Drive Business Growth",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]
            
        },
        {
            name:"Social Media",
            // icon:<MdOutlineSocialDistance />,
            title:"Strategic SEO Optimization Elevates Your Brand Presence.",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]
        },
        {
            name:"Content Marketing",
            // icon:<FaPenSquare />,
            title:"Precision-Driven SEO Fuels Business Success.",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]

        },
        {
            name:"Management",
            // icon:<HiOutlineTrendingUp />,
            title:"Targeted SEO Initiatives Enhance Your Online Visibility.",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]
        },
        {
            name:"Optimization",
            // icon:<GrOptimize />,
            title:"Expert-Crafted SEO Campaigns Propel Your Business Forward.",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]
        },
        {
            name:"Digital Marketing",
            title:"Bespoke SEO Tactics Amplify Your Reach.",
            value:["Nulla vel dolor accumsan neque vestibulum","Cras lacinia elit a turpis ultricies bibendum","posuere a ligula molestie, suscipit ullamcorper velit","Nulla ac varius tellus, in laoreet libero"]
        },
    ];
    

  return (
    <div className='bg-slate-100 border to-white rounded-lg md:px-8 px-6 py-4  m-4 -mt-4 flex flex-col '>
        <div className='flex '>
                {
                    serviceData.map((data,index)=><div className={`p-6 border-r-2 border-solid border-r-gray-300 border-b-2  border-b-gray-300 cursor-pointer hover:bg-red-500 ${selectedIndex === index?"bg-red-500":""}`} key={index} onClick={()=>handlerClick(index)}>{data.name}</div>)
                }
        </div>
        <div className='p-20 flex justify-between gap-x-80'>
            <div>
                    <div>
                            {serviceData.map((data, index) => (
                                selectedIndex === index ? <h1 key={index} className='text-4xl m-4 mx-auto -ml-11'>{data.title}</h1> : null
                            ))}
                    </div>
                    <div className='mt-7 m-4 mx-auto '>
                            {serviceData.map((data, index) => (
                                selectedIndex === index ? (
                                    <ul key={index} className='list-disc list-outside m-4 mx-auto text-slate-400'>
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

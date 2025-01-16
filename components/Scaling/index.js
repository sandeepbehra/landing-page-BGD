'use client'
import React, { useState } from 'react'

const Scaling = () => {
    const [selectedIndex,setSelectedIndex] = useState(0);
    const handlerClick = (index)=>{
            setSelectedIndex(index);
            console.log(index);

    }
    const serviceData = [
        {
            name:" Brand Strategy",
            // icon:<TbWorldSearch />,
            // title:"Build a brand that stands out.",
            value:["Comprehensive Brand Audits",
                "Competitor Research and Analysis",
                "Strategic Brand Creation and Positioning"
                
                ]
        },
        {
            name:" Creative Services",
            // icon:<TbReportAnalytics />,
            // title:"Fueling Growth with Scalable Strategies",
            value:["Brand Identity and Corporate Identity Development",
                "Strategic Brand Activation Campaigns",
                "Design and Development of Sales and Marketing Collaterals"
                ]
            
        },
        {
            name:"Communication Strategy",
            // icon:<MdOutlineSocialDistance />,
            // title:"Achieve Effortless Growth with the #1 PropTech Solution",
            value:["Crafting Key Messages and Messaging Strategies",
                "Creative Campaign Concept Development",
                "Campaign-Specific Collateral Creation",
                "Innovative Advertising Concepts"
                ]
        } 
    ];
    

  return (
    <div className=' border bg-gray-50 to-white  rounded-3xl md:px-8 px-6 py-0  m-4 -mt-4 flex flex-col '>
        <div className='flex md:flex-nowrap px-0 w-full flex-wrap m-0 '>
                {
                    serviceData.map((data,index)=><div className={`p-6 w-screen border-r-2 border-solid border-r-gray-300 border-b-2  border-b-gray-300 cursor-pointer hover:text-white hover:bg-gray-900 ${selectedIndex === index?"bg-gray-900 text-white":""}`} key={index} onClick={()=>handlerClick(index)}>{data.name}</div>)
                }
        </div>
        <div className='p-20 flex justify-between gap-0'>
            <div>
                    {/* <div>
                            {serviceData.map((data, index) => (
                                selectedIndex === index ? <h1 key={index} className='text-2xl md:text-4xl m-4 mx-auto -ml-11'>{data.title}</h1> : null
                            ))}
                    </div> */}
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

            


            <div className='flex flex-col gap-4'>

               <a className='w-12 h-12 ' href='#'><img src='./googleicon.webp'></img></a>
                    <a className='w-9 h-9 ' href='#'><img src='./metaicon.webp'></img></a>
                  <a className='w-9 h-9 ' href='#'><img src='./linkedinicon.webp'></img></a>
                    <a className='w-9 h-9 ' href='#'><img src='./youtubeicon.webp'></img></a>
                    <a className='w-16 h-16 ' href='#'><img src='./taboolaicon.webp'></img></a>
                   
                    
            </div>
        
        </div>
        
        {/* <div className='flex w-full justify-center gap-x-10'>

<a className='w-12 h-12 ' href='#'><img src='./googleicon.webp'></img></a>
     <a className='w-9 h-9 ' href='#'><img src='./metaicon.webp'></img></a>
   <a className='w-9 h-9 ' href='#'><img src='./linkedinicon.webp'></img></a>
     <a className='w-9 h-9 ' href='#'><img src='./youtubeicon.webp'></img></a>
     <a className='w-16 h-16 ' href='#'><img src='./taboolaicon.webp'></img></a>
    
     
</div> */}
    </div>
  )
}

export default Scaling;

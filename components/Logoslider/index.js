

export default function Logoslider(){
    const logos = ["/linked.webp","/google.webp","/meta.webp","/sales.webp","/snapchat.webp","/taboola.webp","/tiktok.webp"]
    return(
        <div className="flex flex-wrap justify-between w-full h-[200px]  md:px-8 px-0 py-0  m-8">
            {/* <img src="/linked.webp"></img> */}
           {
            logos.map((item,i)=>
                <div key={i} className=" flex justify-between "><img src= {item } className="md:w-[50px] md:h-[50px] w-[300px] h-[40px]" ></img>
                
                </div>
              
            )
           }
        </div>
    )
}
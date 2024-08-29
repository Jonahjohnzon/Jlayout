import React from 'react'
import { Data } from '../Pages/Main/Component/Data/Data'
import MouseFollower from "mouse-follower";
import gsap from "gsap";

const Projects = () => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower(
       {skewing:0,
        skewingText:0,
        skewingMedia:0,
        speed: 2,
        
       }
    );

    const text = new MouseFollower(
        {skewing:0,
         skewingText:0,
         skewingMedia:0,
         speed: 0.5,
         
        }
     );
  return (
    <div >
        <div>
            {Data.map((e)=>{
                return(
                    <div key={e.id} className={`  flex justify-between items-center relative py-12  border-t-[1px] text-main overflow-hidden  hover:text-white transition-all group duration-100 ease-in-out cursor-pointer border-main border-opacity-10 ${e.id == 3 && "border-b-[1px]"}`} onClick={() =>{
                        window.location.href = e.Website
                    }}  onMouseEnter={() =>{
                        cursor.setVideo(e.Image);
                        text.setText('website➜');
                    }} 
                    
                    onMouseLeave={() =>{
                        cursor.removeVideo()
                        text.removeText();
                    }}>
                        <div className=' absolute bg-main w-full h-full z-10  -bottom-[100%] left-0 transition-all ease-in-out duration-500 group-hover:bottom-0'></div>
                        <div className=' w-full z-20 relative group-hover:pl-20 transition-all ease-in-out  duration-300 font-medium'><h1 className=' text-4xl lg:text-5xl 2xl:text-6xl'>{e.Title}</h1></div>
                        <div className='w-full relative z-20 flex justify-center'><p className=' transition-all ease-in-out  duration-300  text-xl  '>{e.Funtion}</p></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects
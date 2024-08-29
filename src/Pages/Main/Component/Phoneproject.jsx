import React from 'react'
import { Data } from './Data/Data'
import { FiArrowUpRight } from "react-icons/fi";

const Phoneproject = () => {
  return (
    <div>
        <div className=' flex flex-wrap justify-center md:justify-between'>
        {Data.map((e)=>{
                return(
                    <div key={e.id} className=' mb-10 md:mb-7 w-[95%] sm:w-[80vw] md:w-[45vw]'>
                    <div  className={`  flex flex-col items-start py-2 mb-2  text-main overflow-hidden  transition-all  duration-100 ease-in-out cursor-pointer border-main border-opacity-10 border-b-[1px]`}  >    
                        <div className='   mb-5'>
                        <video className='videoTag' autoPlay loop muted>
                     <source src={e.Image} type='video/mp4' />
              </video>
                        </div>
                        <div className=' w-full z-20  '><h1 className='font-medium text-2xl sm:text-3xl'>{e.Title.toUpperCase()}</h1></div>
                    </div>
                    <div className=' w-full flex justify-between items-center'><div ><p className=' text-sm'>{e.Funtion}</p></div><div className=' cursor-pointer flex items-center' onClick={() =>{
                        window.location.href = e.Website
                    }}><p className=' font-medium text-sm'>Website</p><FiArrowUpRight/></div></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Phoneproject
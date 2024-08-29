import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Button = ({name, width = "w-36", fn}) => {
  return (
    <div className={` font-Worksans whitespace-nowrap overflow-hidden  bg-main font-normal rounded-3xl h-10 ${width} text-white text-[1rem] overflow-hidden flex  items-center group justify-center cursor-pointer shadow-lg`} onClick={()=>{
      if(fn){
        fn()
      }
    }}><div className=' w-2 h-2 transition-all duration-300 ease-in-out group-hover:w-7 group-hover:h-7 bg-white rounded-full mr-2 overflow-hidden relative ' ><FaArrowRight className=' text-main left-[-200%] top-[20%]  transition-all ease-in-out duration-300 group-hover:left-[30%] absolute'/></div><div>{name}</div></div>
  )
}

export default Button
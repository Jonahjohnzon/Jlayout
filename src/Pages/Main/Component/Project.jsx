import React,{useEffect, useRef} from 'react'
import Projects from '../../../Elements/Project';
import { motion } from 'framer-motion';
import { useInView, useAnimation } from "framer-motion"
import Phoneproject from './Phoneproject';


const Project = () => {
  const ref = useRef(null)
  const animation = useAnimation()
  const isInView = useInView(ref, { once: true })
  useEffect(()=>{
    if(isInView)
    {
      animation.start("animate")
    }
  },[isInView])
  const Movement  = {
    initial:{
      opacity:1,
      y:100
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.5,
        delay:0.3,
        stiffness:400,
      }
    }
  }
  return (
    <div className=' bg-white flex justify-center sm:py-20 py-10'>
        <div className=' w-[95%] lg:w-[90%] 2xl:w-[75%] ' ref={ref}>
          <div className=' max-h-1000 overflow-hidden' >
            <motion.h1 variants={Movement} initial="initial" animate={animation}  className=' text-xl lg:text-2xl  cursor-pointer px-3 sm:px-0 mb-5 lg:mb-14' >
                Latest Projects
            </motion.h1></div>
                <div  className='lg:block hidden' ><Projects/></div>
                <div  className='block lg:hidden' ><Phoneproject/></div>
        </div>
    </div>
  )
}

export default Project
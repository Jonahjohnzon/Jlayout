import React,{useRef,useEffect}  from 'react'
import { useInView, useAnimation } from "framer-motion"
import { motion } from 'framer-motion';

const Table = () => {
    const ref = useRef(null)
    const animation = useAnimation();
    const isInView = useInView(ref, { once: true })
    useEffect(() => {
      if (isInView) {
        animation.start("show");
      } 
    }, [isInView]);
    const Movenent={
      hidden:{
        y:60,
        opacity:0
      },
      show:{
        y:0,
        opacity:1,
        transition:{
          duration:0.3,
          delay:0.2,
          stiffness:400,
          when:'beforeChildren',
          staggerChildren:0.2
        }
      }
     
    }

    const children={
        hidden:{
         opacity:0,
         y:60,
        },
        show:{
          opacity:1,
          y:0
        }}
    const List = [
        {
            title:"Exceptional Speed/Performance",
            text:"Using Next.js, we build a lightning-fast website that delivers an excellent user experience, keeping your visitors engaged."
        },
        {
            title:" Engaged Partnership",
            text:"We walk with you through each step with open communication, valuable feedback, and individual support."
        },
        {
            title:"Premium Quality and Long-Term Value",
            text:"We deliver a top-notch product that remains robust and effective, providing you with an exceptional return on your investment."
        },
        {
            title:"Effortless Content Management",
            text:"With Sanity, you get a flexible and user-friendly system that makes updating content and creating new pages a breeze."
        },
        {
            title:" Built-In Security and Peace of Mind",
            text:"Our websites come with built-in security, ensuring you don’t need to stress over ongoing security patches and plugin updates."
        }
    ]
  return (
    <div className=' bg-white flex flex-col items-center justify-center sm:pt-10 ' >
        <div className=' w-[95%] lg:w-[90%] 2xl:w-[75%] mb-10  sm:mb-20 border-b-[1px] border-main border-opacity-10 pb-10 sm:pb-20 flex justify-between  md:flex-row flex-col'>
            <div className=' w-full text-lg sm:text-2xl font-semibold mb-10 md:mb-0'><h1>Purpose of the agency</h1></div>
            <div className=' w-full'>
                <div className=' mb-5'>
                <p>
                In today’s world, it has become <span className=' font-medium sm:font-semibold'>really easy</span> to get a website at a low cost or even create one yourself. Therefore, we have committed to providing websites that differentiate themselves from the <span className=' font-medium sm:font-semibold'>standard options</span>.</p></div>
                <div>As a web agency focused solely on <span className=' font-medium sm:font-semibold'>website development</span>, we dedicate all our resources to this field. We have meticulously studied every element that constitutes a great website to <span className='font-medium sm:font-semibold'>offer you the highest quality outcome</span>.</div></div>
        </div>
        <div className=' w-[95%] lg:w-[90%] 2xl:w-[75%]  flex md:flex-row flex-col justify-between mb-20 border-b-[1px] border-main border-opacity-10 pb-14 '>
            <div className=' w-full text-lg sm:text-2xl font-semibold mb-10 md:mb-0' ref={ref}><h1>5 reasons for your online success</h1></div>
                <motion.div className=' w-full' viewport={{ once: true }} variants={Movenent} initial='hidden' animate={animation}>
                    {
                        List.map((e,i)=>{
                            return(
                                <motion.div variants={children}  className=' mb-10'>
                                    <h1 className=' font-semibold mb-3'><span>{i + 1}.</span><span className=' ml-1'>{e.title}</span></h1>
                                    <div><p>{e.text}</p></div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
        </div>
    </div>
  )
}

export default Table
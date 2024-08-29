import React, { useState,useRef,useEffect } from 'react'
import { GoPlus } from "react-icons/go";
import { useInView, useAnimation } from "framer-motion"
import { motion } from 'framer-motion';

const Faq = () => {
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
        y:30,
        opacity:0
      },
      show:{
        y:0,
        opacity:1,
        transition:{
          duration:0.5,
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
         y:30,
        },
        show:{
          opacity:1,
          y:0
        }}
    const FAQ =({question, answer, i})=>{
        const [show, setshow] = useState(false)
        return(
            <div className={`  mb-5 sm:mb-10 pb-5 sm:pb-8 ${ i == 2 ||"border-main border-b-[1px] border-opacity-10"}`}>
                <div>
                    <div className=' flex cursor-pointer group items-center justify-between' onClick={()=>{
                       setshow(!show)
                    }}><h3 className=' font-medium  sm:text-lg md:text-xl  md:mb-3'>{question}</h3><p className={` text-3xl group-hover:rotate-45 ${show?" rotate-45":" rotate-0"} transition-all duration-500 ease-in-out `}><GoPlus/></p></div>
                    <div className={`  ${show?"max-h-[1000px]":"max-h-0"} overflow-hidden transition-all ease-in-out duration-1000`}><p>{answer}</p></div>
                </div>
            </div>
        )
    }

    const List =[
        {
            question:"What sets us apart from other web agencies?",
            answer:`
As an agency, we aim to offer not just a technologically superior website but also a positive and unforgettable experience. We strive to give you the best in both technology and service.
In short, we go all out to deliver the best for you. :)`
        },
        {
            question:"How long does it take to create a website?",
            answer:`
With our Web Starter Package, anticipate a timeline of about 2 to 3 weeks. The Web Premium package usually requires 3 to 4 weeks, and the Web Ultimate package may take over 4 weeks, depending on project complexity.`
        },
        {
            question:"How does the payment process work?",
            answer:`
For the payment, we require 50% upfront before we start working on your project. The remaining 50% is due upon completion and delivery of the project. You can make payment with crypto.`
        }
    ]
  return (
    <div className='bg-white py-14 flex justify-center' >
        <div className=" w-[95%] lg:w-[90%] 2xl:w-[75%] ">
            <div className=' flex w-full justify-between  md:flex-row flex-col' >
                <div className=' w-full'><h1 className=' font-semibold text-xl md:text-2xl mb-10 md:mb-0'>Any more question?</h1></div>
                <div className=' w-full' ref={ref}>
                    <motion.div  viewport={{ once: true }} variants={Movenent} initial='hidden' animate={animation}>
                        {List.map((e, i)=>{
                            return(
                                <motion.div variants={children}>
                                    <FAQ  question={e.question} answer={e.answer} i={i}/>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
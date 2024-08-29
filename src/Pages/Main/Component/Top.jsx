import React from 'react'
import TextGenerate from '../../../Elements/TextGenerate'
import Button from '../../../Elements/Button'
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import { state } from '../../../Store';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-scroll';

const Top = () => {
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
        delay:0.2,
        stiffness:400,
      }
    }
  }

  const open =()=>{
    state.Book = true
  }
  return (
    <div className=' relative min-h-[100vh]'>
        <div className=' absolute w-full h-full flex justify-around top-0'>
        <div className=' h-full w-[1px] bg-gradient-to-b from-[#E8E8E8] from-75% to-transparent '></div>
        <div className=' h-full w-[1px] bg-gradient-to-b from-[#E8E8E8] from-75% to-transparent'></div>
        <div className=' h-full w-[1px] bg-gradient-to-b from-[#E8E8E8] from-75% to-transparent'></div>
        <div className=' h-full w-[1px] bg-gradient-to-b from-[#E8E8E8] from-75% to-transparent'></div>
        </div>
        <div className=' pt-32 w-full flex justify-center relative z-20'>
            <div className='font-semibold w-full flex flex-col items-center'>
                <motion.h3 variants={Movement} initial="initial" animate="animate" className=' font-semibold mb-10'>WEB AGENCY LAGOS</motion.h3>
                <div className=' text-3xl sm:text-5xl lg:text-6xl mb-10  font-semibold flex flex-col items-center'>
                    <div className=' overflow-hidden max-h-[1000px] mb-1 sm:mb-5'><motion.h1 variants={Movement} initial="initial" animate="animate" className=' '>Websites that</motion.h1></div>
                    <div className=' overflow-hidden max-h-[1000px] pb-1'><motion.div  variants={Movement} initial="initial" animate="animate">
                    <TextGenerate First={"captivate and engage."} Second={"generate more sales."} Third={"doubles your lead."}/>
                    </motion.div></div>
                </div>
                <div className=' max-h-[1000px] w-[95%] sm:w-[70%] 2xl:w-[40%] 3xl:w-[25%] overflow-hidden mb-10 '><motion.div variants={Movement} initial="initial" animate="animate" className='  font-normal text-center'><p>Your website becomes an tireless sales assistant, always there for you 24/7, converting visitors into customers</p></motion.div></div>
                <div className='max-h-[1000px] overflow-hidden mb-20'><motion.div variants={Movement} initial="initial" animate="animate" className=' flex flex-col md:flex-row items-center '>
                  <div className=' md:mr-10 mb-4 md:mb-0'><Button name={"Start your project"} width=' w-48' fn={open}/></div>
                  <div className=' flex items-center'>
                    <div className=' mr-2'><img src='/Images/Logo/G.png' className=' w-9'/></div>
                    <div className=' flex flex-col'>
                      <p className=' font-normal text-sm'>Google Rating</p>
                      <div className=' flex'><p className='mr-1 text-sm'>5.0</p>
                      <div className=' flex items-center '>{[1,2,3,4,5].map((e)=>{
                        return(
                          <div key={e}><FaStar className=' text-sm mr-1 text-[#FBBD33]'/></div>
                        )
                      })
                      }</div></div>
                    </div>
                  </div>
                </motion.div></div>
                
                <div  className=' flex flex-col items-center'>
                <div className=' max-h-[1000px] overflow-hidden '> <motion.div variants={Movement} initial="initial" animate="animate" ><h6 >Our recognitions :</h6></motion.div>
                  <div>
                  </div></div>
                    <div className=' max-h-[1000px] overflow-hidden '><motion.div variants={Movement} initial="initial" animate="animate"><img src='/Images/Logo/alx.svg' className=' w-44 2xl:w-60'/></motion.div></div>
                  
                </div>
                <div className='max-h-[1000px] overflow-hidden w-full flex justify-center '>
                <Link to="project" smooth={true}  hashSpy={true} spy={true} activeClass="active"><motion.div variants={Movement} initial="initial" animate="animate" className=' cursor-pointer'><FaAngleDoubleDown  className=' text-main text-4xl animate-pulses cursor-pointer'/></motion.div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top
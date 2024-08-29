import React,{useState, useRef} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio';
import { state } from './Store';
import { Link, animateScroll as scroll} from 'react-scroll';

const Slide = () => {
    const check = useSnapshot(state)
    const contentRef = useRef(null);
    const bg = {
        hidden:{
          opacity:0
        },
        animate:{
          opacity:1,
          transition:{
            duration:0.3,
            delay:0.1,
          }
        }
        ,
        exit:{
          opacity:0,
          transition:{
            duration:0.3,
            delay:0.1,
          }
        }
        
        }
        const slide = {
          hidden:{
            height:"0px"
          },
          animate:{
            height:"200px",
            transition:{
              duration:0.3,
              delay:0.1,
              stiffness:400,
            }
          },
          exit:{
             height:"0px",
            transition:{
              duration:0.3,
              delay:0.1,
              stiffness:400,
            }
          }
          }
  return (
    <AnimatePresence>{check.Slide &&<div className=' absolute top-0   w-full h-[100vh] '>
        <div className=' relative w-fuly:0l h-full'>
            <motion.div  variants={bg} initial="hidden" exit="exit" animate="animate" className=' bg-main bg-opacity-75  absolute z-10 top-0 w-full h-full' onClick={() =>{
                      state.Slide = false
                    }}></motion.div>
            <motion.div   className=' overflow-hidden'   
    initial={{
        height: 0,
    }}
    animate={{
        height: "auto",
    }}
    exit={{
        height: 0,
    }} >
            <div   className=' bg-white w-full relative z-20 border-b-4 border-main py-16 px-5' >
                <div className=' mb-5 border-b-[1px] pb-3 border-main border-opacity-30 '>
                    <p>Navigation</p>
                </div>
                <ul className=' text-xl flex flex-col items-start  font-semibold'>
                <Link to="project" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  ' onClick={() =>{
                      state.Slide = false
                    }}
                    
                > <li className=' mb-4'>Project</li></Link>
                     <Link to="table" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  ' onClick={() =>{
                      state.Slide = false
                    }}
                    
                ><li className=' mb-4'>Mission</li></Link>
                     <Link to="price" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  ' onClick={() =>{
                      state.Slide = false
                    }}
                    
                ><li className=' mb-4'>Pricing</li></Link>
                     <Link to="faq" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  ' onClick={() =>{
                      state.Slide = false
                    }}
                    
                ><li className=' mb-4'>FAQ</li></Link>
                   <li className=' ' onClick={() =>{
                      state.Book= true
                    }}>Contact Us</li>
                </ul>
            </div></motion.div>
        </div>
    </div>}</AnimatePresence>
  )
}

export default Slide
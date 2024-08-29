import React,{useEffect, useRef} from 'react'
import { motion } from 'framer-motion';
import { useInView, useAnimation } from "framer-motion"

const Fact = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const animation = useAnimation()
    const isInView1 = useInView(ref1, { once: true })
    const isInView2 = useInView(ref2, { once: true })
    const isInView3 = useInView(ref3, { once: true })


    useEffect(()=>{
      if(isInView1)
      {
        animation.start("animate1")
      }
      if(isInView2)
      {
        animation.start("animate2")

      }
      if(isInView3)
        {
          animation.start("animate3")
  
        }
    },[isInView1,isInView2,isInView3])
    const Movement  = {
      initial:{
        opacity:1,
        y:100
      },
      animate1:{
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
    const Movement1  = {
        initial:{
          opacity:1,
          y:100
        },
        animate2:{
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
      const Movement3  = {
        initial:{
          opacity:1,
          y:100
        },
        animate3:{
          y:0,
          opacity:1,
          transition:{
            type:'tween',
            duration:0.2,
            delay:0.1,
            stiffness:400,
          }
        }
      }
    const List=[
        {title:"<1s",
        text:"Experience lightning-fast load times of less than a second, delighting your visitors and ensuring they come back for more."
        }
        ,
        {title:"100%",
            text:"Your satisfaction is our priority. We work until you are completely happy with your website - 100% satisfaction guaranteed!"
            }
            ,
        {title:"24/7",
                text:"Enjoy the assurance that your website is always secure and available - no annoying plugin updates required."
                }
    ]
  return (
    <div className=' bg-white pt-20 flex justify-center'>
        <div className=' w-[95%] lg:w-[90%] 2xl:w-[75%] '>
            <div className=' flex justify-between flex-col md:flex-row'>
                <div className=' text-lg sm:text-2xl font-semibold w-full mb-10 md:mb-0'><h1>3 facts you'll love</h1></div>
                <div className=' w-full'>
                    <div>
                        {List.map((e,i)=>{
                            return(
                                <div  className={`${ i == 2 ||"border-main border-b-[1px] border-opacity-10"} mb-10 pb-10`}>
                                   <div className=' max-h-[1000px] overflow-hidden mb-5'><motion.div className=' ' variants={i === 0 ? Movement : i === 1 ? Movement1 : i === 2 ? Movement3 : null} initial="initial" animate={animation}><h1 className=' text-5xl md:text-6xl font-semibold '>{e.title}</h1></motion.div></div> 
                                    <div ref={i === 0 ? ref1 : i === 1 ? ref2 : i === 2 ? ref3 : null}  ><p>{e.text}</p></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fact
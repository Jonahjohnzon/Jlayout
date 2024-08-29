import React, { useState , useEffect} from 'react'
import Button from '../Elements/Button'
import useDetectScroll from '@smakss/react-scroll-direction';
import { Link, animateScroll as scroll} from 'react-scroll';
import { state } from '../Store';
import Slide from '../Slide';
import { BiMenu } from "react-icons/bi";
import { useSnapshot } from 'valtio';
import { GoPlus } from "react-icons/go";


const Navbar = () => {
    const { scrollDir } = useDetectScroll();
    const checks = useSnapshot(state)
    const check = window.location?.hash?.substring(1)
    const [left, setleft] = useState("")
    const [show, setshow] = useState(true)
    const [path, setpath] = useState("")
    useEffect(()=>{window.addEventListener('scroll',()=>{
        if(scrollDir == "up")
        {
            setshow(true)
        }
        else if(scrollDir == "down")
        {
            setshow(false)
        }
        else{
            setshow(show)
        }
        })},[scrollDir])

        const Scrollposition =()=>{
            const data = window.location?.hash?.substring(1)
            setpath(data)
            if(data == "project" )
            {
                setleft("0%")
            }
            else if(data == "table")
            {
                setleft("25%")
            }
            else if(data == "price")
                {
                    setleft("50%")
                }
            else if(data == "faq")
                    {
                        setleft("75%")
                    }
            else{
                setpath("")
                setleft("0%")
            }
        }

        useEffect(()=>{
            if(check == "")
            {
                Scrollposition()
            }
        },[check])

        const open =()=>{
            state.Book = true
          }
        
  return (
    <nav className=' bg-main select-none fixed top-0 w-full z-40'>
        <div className=' w-full relative '>
        <div className={` relative z-40 bg-main w-full text-white text-xs flex justify-end ${show?"h-10 sm:h-10":"h-0"} transition-all duration-500 ease-in-out items-center px-3 sm:px-10`}>
            <div>
                <ul className=' flex sm:flex-row flex-col items-center'>
                    <li className=' cursor-pointer hover:opacity-50  transition-all ease-in-out duration-300' onClick={()=>{
                                        window.location.href = "https://cal.com/jonahjohnzon/appointment"
                                    }}>Book an appointment </li>
                    <li className=' ml-5 cursor-pointer hover:opacity-50 hidden sm:block transition-all ease-in-out duration-300' onClick={()=>{
                                        window.location.href = "mailto:jonahjohnzon@gmail.com"
                                    }}>jonahjohnzon@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className={` w-full flex justify-between items-center px-14 py-4 font-Worksans ${show?"rounded-t-3xl":" rounded-none"} transition-all ease-in-out duration-300  bg-gray  border-opacity-10 border-main  border-b-[1px] relative z-30  `}>
            <section className=' flex lg:w-1/2 xl:w-full  '> 
                <div className=' w-10 cursor-pointer' onClick={() =>{
                          scroll.scrollToTop();
                    }}><img src='/Images/Logo/jlogo.webp'/></div>
            </section>
            <section className=' w-full md:flex hidden justify-center items-center' >
                <ul className=' flex items-center  justify-between w-[90%] xl:w-[75%] 3xl:w-[65%] bg-main bg-opacity-5 group rounded-full overflow-hidden relative'>
                    <div className={` absolute h-full  top-0 group-hover:bg-main  ${path != "" && "bg-main"} rounded-3xl w-1/4 transition-all duration-300 ease-in-out`} style={{left:left}}></div>
                    <Link to="project" smooth={true}  hashSpy={true} spy={true} activeClass="active"  className='  w-full flex  justify-center items-center cursor-pointer relative z-20 ' onMouseOver={() =>{
                        setleft("0%")
                        setpath("project")
                    }}
                    onSetActive={() =>{
                        setpath("project")
                        setleft("0%")
                    }}
                    onMouseLeave={() =>{
                        Scrollposition()
                    }}
                    ><span className={` hover:text-white transition-all duration-300 ease-in-out w-full flex py-3 justify-center rounded-3xl ${path == "project" && "text-white"}`} >Project</span></Link>
                    <Link to="table" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  w-full flex  justify-center items-center  cursor-pointer relative z-20' onMouseOver={() =>{
                        setleft("25%")
                        setpath("table")
                    }}
                    onSetActive={() =>{
                        setpath("table")
                        setleft("25%")
                    }}

                    onMouseLeave={() =>{
                        Scrollposition()
                    }}
                ><span className={` hover:text-white transition-all duration-300 ease-in-out w-full flex py-3 justify-center rounded-3xl ${path == "table" && "text-white"}`}>Mission</span></Link>
                    <Link to="price" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  w-full flex  justify-center items-center  cursor-pointer relative z-20' onMouseOver={() =>{
                        setleft("50%")
                        setpath("price")
                    }}

                    onSetActive={() =>{
                        setpath("price")
                        setleft("50%")
                    }}
                    onMouseLeave={() =>{
                        Scrollposition()
                    }}
                 ><span className={` hover:text-white transition-all duration-300 ease-in-out w-full flex py-3 justify-center rounded-3xl ${path == "price" && "text-white"}`} >Pricing</span></Link>
                    <Link to="faq" smooth={true}  hashSpy={true} spy={true} activeClass="active" className='  w-full  flex justify-center items-center  cursor-pointer relative z-20' onMouseOver={() =>{
                        setleft("75%")
                        setpath("faq")
                    }}
                    
                    onSetActive={() =>{
                        setpath("faq")
                        setleft("75%")
                    }}
                    onMouseLeave={() =>{
                        Scrollposition()
                    }}
                > <span className={` hover:text-white transition-all duration-300 ease-in-out w-full flex py-3 justify-center rounded-3xl ${path == "faq" && "text-white"}`}>FAQ</span></Link>
                </ul>
           
            </section>
            <section className=' lg:w-1/2  xl:w-full md:flex justify-end hidden'>
                <div><Button name={"Get in touch"} fn={open}/></div>
            </section>
            <section className='block md:hidden '>
                <div className=' w-10 h-10 rounded-full bg-main flex justify-center items-center' onClick={()=>{
                 
            state.Slide = !checks.Slide
   
          }}>
                    {checks.Slide?<GoPlus className=' text-white rotate-45' />:<BiMenu className=' text-white'/>}
                    </div>
            </section>
        </div>
        <div className=' relative w-full block md:hidden'>
        <Slide/>
        </div>
        <div className=' absolute -bottom-7  w-6 h-8  flex items-end  bg-gray z-30 right-0'>
                <div className=' bg-white  w-6 h-7   border-opacity-50 border-main  border-t-[1px]  rounded-tr-3xl'></div>
            </div>
            <div className=' absolute -bottom-7  w-6 h-8  flex items-end  bg-gray z-30 left-0'>
                <div className=' bg-white  w-6 h-7   border-opacity-50 border-main  border-t-[1px]  rounded-tl-3xl'></div>
            </div>
           
        </div>
    </nav>
  )
}

export default Navbar
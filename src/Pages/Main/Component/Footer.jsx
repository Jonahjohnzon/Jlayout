import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const Text =({name})=>{
        return(
            <div className=' flex flex-col items-start'>
            <div className='  group'><p className=' cursor-pointer -mb-1'>{name}</p>
            <p className=' group-hover:w-full w-0 transition-all duration-300 ease-in-out h-[1px]  bg-main'></p></div>
        </div>
        )
    }
  return (
    <div className=' bg-white relative z-30 '>
    <div className=' w-full flex bg-gray  justify-center py-20 border-t-[1px] border-main border-opacity-10 rounded-t-3xl'>
        <div className='  w-full'>
            <div>
                <div className=' flex justify-between md:flex-row flex-col w-full px-2 md:px-0'>
                    <div className=' sm:w-[65%] lg:w-full flex  md:justify-center mb-10'>
                        <div className=' w-[95%] xl:w-[80%] 2xl:w-1/2'>
                        <h1 className=' mb-1' ><img src='/Images/Logo/jlogo.webp' className=' w-12 cursor-pointer' onClick={()=>{
                                         scroll.scrollToTop();
                                    }}/><p></p></h1>
                        <p className=' text-sm mb-5'>Copyright &copy; 2024. All rights reserved</p>
                        <div className=' lg:w-1/2 mb-10'>
                            <h3 className=' font-medium text-2xl'>Bringing ideas to life through layout.</h3>
                        </div>
                    <div onClick={()=>{
                                         scroll.scrollToTop();
                                    }}>  < Text name={"Back to top"}/></div>
                        </div>
                    </div>
                    <div className=' w-full text-sm sm:text-base flex md:justify-center'>
                        <div className=' w-[98%] lg:w-[95%] 2xl:w-2/3 flex flex-col sm:flex-row justify-between'>
                            <div className=' w-full mb-5 sm:mb-0'>
                                <h5 className=' font-semibold mb-3'>Navigation</h5>
                                <ul>
                                    <Link to="project" smooth={true}  hashSpy={true} spy={true} activeClass="active"><li className=' mb-2'> < Text name={"Projects"}/></li></Link>
                                    <Link to="table" smooth={true}  hashSpy={true} spy={true} activeClass="active"><li className=' mb-2'>< Text name={"Mission"}/></li></Link>
                                    <Link to="price" smooth={true}  hashSpy={true} spy={true} activeClass="active"> <li className=' mb-2'>< Text name={"Pricing"}/></li></Link>
                                    <Link to="faq" smooth={true}  hashSpy={true} spy={true} activeClass="active"><li>< Text name={"FAQ"}/></li></Link>
                                </ul>
                            </div>
                            <div className=' w-full mb-5 sm:mb-0'>
                                <h5 className=' font-semibold mb-3'>Socials</h5>
                                <ul>
                                    <li className=' mb-2' onClick={()=>{
                                        window.location.href = "https://www.instagram.com/mid_9it/"
                                    }}>< Text name={"Instagram"}/></li>
                                    <li className=' mb-2' onClick={()=>{
                                        window.location.href = "https://x.com/Luzebox"
                                    }}>< Text name={"Twitter"}/></li>
                                  
                                </ul>
                            </div>
                            <div className=' w-full'>
                                <h5 className=' font-semibold mb-3'>Contact details</h5>
                                <ul>
                                    <li className=' mb-2' onClick={()=>{
                                        window.location.href = "tel:+2348106908991"
                                    }}>< Text name={"+234 810 690 8991"}/></li>
                                    <li className=' mb-2' onClick={()=>{
                                        window.location.href = "mailto:jonahjohnzon@gmail.com"
                                    }}>< Text name={"jonahjohnzon@gmail.com"}/></li>
                                    <li className=' mb-2' onClick={()=>{
                                        window.location.href = "https://cal.com/jonahjohnzon/appointment"
                                    }}>< Text name={"Online consultation"}/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Footer
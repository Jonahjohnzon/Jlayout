import React from 'react'
import Button from '../../../Elements/Button'
import { state } from '../../../Store';
const Vision = () => {
    const List = [];
for (let i = 1; i <= 350; i++) {
    List.push(i);
}
const open =()=>{
    state.Book = true
  }
  return (
    <div className=' bg-white flex flex-col pb-10 items-center justify-center'>
        <div className=' w-full md:w-[85%] h-[1px] bg-gradient-to-r from-[#FCFCFC] via-[#E0E0E0] to-[#FCFCFC]'></div>
        <div className=' w-full md:w-[75%] relative  flex items-center'>
            <div className=' h-[390px] w-[1px] absolute left-0 bg-gradient-to-b from-[#FCFCFC] via-[#E0E0E0] to-[#FCFCFC]'></div>
            <div  className='py-14 px-5 sm:px-10 w-full overflow-hidden relative'>
                <div className=' absolute  -top-28 -left-36 z-10'>
                    <div className=' flex'>
                        {List.map((e)=>{
                            return(
                                <div className=' h-[500px] mr-1 rotate-45 w-[1px] bg-main bg-opacity-5'></div>
                            )
                        })}
                    </div>
                </div>
                <h1 className=' mb-5 text-lg sm:text-2xl font-semibold relative z-30' >Let's bring your vision to life</h1>
                <div className=' mb-5 w-[90%] sm:w-[80%] lg:w-1/2 relative z-30'><p>Have an idea? Let’s transform your vision into a stunning new website together! Contact us to take the first step.</p></div>
                <div className=' relative z-30'><Button name={"Connect with us"} width=' w-44' fn={open}/></div>
                <div className=' absolute right-0 -top-10 z-20'>
                <img src='/svg1.svg'  className=' w-[450px]'/>
            </div>
            </div>
            <div className=' h-[390px] w-[1px]  absolute right-0 bg-gradient-to-b from-[#FCFCFC] via-[#E0E0E0] to-[#FCFCFC]'></div>
        </div>
        <div className=' w-full md:w-[85%] h-[1px] bg-gradient-to-r   from-[#FCFCFC] via-[#E0E0E0] to-[#FCFCFC]'></div>
    </div>
  )
}

export default Vision
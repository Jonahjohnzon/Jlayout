import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";


const Pricing = () => {


  const List = ["Free logo design", "Custom design & development","Free professional copywriting","Free website hosting for static sites"]
  const Price = [
    {name:"Web Starter",
      type:"1-3 pages",
      price:"100",
      words:"A professional online presence for individuals and businesses. Perfect for small businesses or personal projects."
    },
    {name:"Web Premium",
      type:"4-6 pages",
      price:"200",
      words:"Take your online presence to the next level. This package offers more space and flexibility for businesses with a broader range of services."
    },
    {
      name:"Web Ultimate",
      type:"7-9+ pages",
      price:"300+",
      words:"A powerful online platform for established businesses with extensive content. Showcase your full range of services."
    }
  ]
  return (
    <div className=' bg-white flex justify-center border-main border-b-[1px] pb-10 border-opacity-10 ' >
        <div className='w-[95%] lg:w-[90%] 2xl:w-[75%]  flex flex-col-reverse md:flex-row justify-between'>
            <div className=' w-full'>
              <div className=' w-[80%] xl:w-1/2'>
                <div><h1 className=' text-2xl hidden md:block font-semibold mb-5'>Simple, Transparent Pricing</h1></div>
                <div><p className=' font-semibold mb-5'>Included in every package:</p></div>
                <div>{
                  List.map((e,i)=>{
                    return(
                      <div className={` text-base ${ i == 3 ||"border-main border-b-[1px] border-opacity-10"} pb-5 flex items-center mb-5`}><div className=' mr-2'>< BsPatchCheckFill className=' text-[#8E6EFA]'/></div><p>{e}</p></div>
                    )
                  })}</div></div>
            </div>
            <div className=' w-full' >
                    <div >
                      <div>{
                        Price.map((e,i)=>{
                          return(
                            <div  className={`${ i == 2 ||"border-main border-b-[1px] border-opacity-10"} mb-10 pb-10`}>
                              <div className=' mb-5 text-lg sm:text-2xl font-semibold flex flex-col lg:flex-row lg:items-center justify-between'><div className=' flex items-center mb-2 lg:mb-0 '><div className=' flex items-end'><IoIosPricetags className=' text-[#8E6EFA] mr-1'/></div><p className='border-main border-r-[1px]  border-opacity-10 mr-3 sm:mr-5 pr-3 sm:pr-5 '>{e.name}</p> <div className=' text-main text-opacity-70'><p>{e.type}</p></div> </div><div className=' w-20'><p>${e.price}</p></div></div>
                              <div className=' text-main'><p>{e.words}</p></div>
                            </div>
                          )
                        }) 
                        }</div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
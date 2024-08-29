import React, { useState, useEffect } from 'react'
import Button from './Elements/Button'
import { GoPlus } from "react-icons/go";
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio';
import { state } from './Store';
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import ReactLoading from "react-loading";

const Book = () => {
  const check = useSnapshot(state)
  const [load, setload] = useState(true);
  const [result, setresult] = useState(false);
  const [wording, setwording] = useState("");
  const schema = yup.object({
    name: yup.string().required().max(100),
    email: yup.string().required().max(100),
    comment: yup.string().required(),
  });
  useEffect(()=>{
    if(result)
    {
      setTimeout(()=>{
        setresult(false)
      },5000)
    }
    
      },[result])
  const close =()=>{
    state.Book = false
  }
  const [text, settext] = useState("w-0")
  const [email, setemail] = useState("w-0")
  const [text2, settext2] = useState("w-0")
  const Text =({name})=>{
    return(
      
        <div className=' flex flex-col items-start'>
        <div className='  group'><p className=' cursor-pointer -mb-1'>{name}</p>
        <p className=' group-hover:w-full w-0 transition-all duration-300 ease-in-out h-[1px]  bg-main'></p></div>
    </div>
    )
}

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
    x:800
  },
  animate:{
    x:0,
    transition:{
      duration:0.3,
      delay:0.1,
      stiffness:400,
    }
  },
  exit:{
    x:800,
    transition:{
      duration:0.3,
      delay:0.1,
      stiffness:400,
    }
  }
  }

  return (
    <AnimatePresence>
    {check.Book &&<div className=' w-full h-[100vh] fixed top-0 z-50 left-0 '>

      <div className=' h-full relative w-full  flex'>
      <motion.div variants={bg} initial="hidden" exit="exit" animate="animate"  className=' absolute w-full h-full bg-opacity-80  z-20 bg-main' onClick={close}></motion.div>
        <motion.div variants={slide} initial="hidden" exit="exit" animate="animate" className=' w-full  sm:w-[90%] md:w-[60%] lg:w-[50%] 2xl:w-[33%] p-5 h-[100%] sm:h-[95%] flex flex-col  z-30 justify-between top-0 sm:top-5 overflow-y-scroll sm:overflow-hidden bg-white sm:rounded-3xl absolute right-0 sm:right-5'>
          <div className=' mb-10 sm:mb-0 sm:overflow-hidden'>
            <div className=' flex justify-between items-start'>
          <h1 className=' mb-10 text-2xl sm:text-3xl font-semibold w-[80%] md:w-1/2'>Let’s kick off your project together</h1>
          <div><GoPlus className='rotate-45 text-4xl cursor-pointer' onClick={close}/></div>
          </div>
          <Formik
            className="flex flex-col  justify-center w-[90%] pb-5"
            initialValues={{ name: "", email: "", comment: "" }}
            validationSchema={schema}
            onSubmit={(forms,{resetForm}) => {
              setload(false);
              emailjs
                .send(
                  "service_xmkkj8s",
                  "template_pyqkmav",
                  forms,
                  "jhqkH0F-BeKZgqEvn",
                )
                .then(
                  (result) => {
                    setload(true);
                    setwording("Mail sent 🎉🎉🎉");
                    setresult(true);
                    resetForm()
                  },
                  (error) => {
                    setwording("Something went wrong 😿😿😿");
                    setload(true);
                    setresult(true);
                  },
                );
            }}
          >
            {(props) => {
              return (
          <Form>
            <div className=' mb-5 relative'>
              <p className=' text-sm font-medium mb-1'>Full name<span className=' text-red  font-normal'>*</span></p>
              <Field type="text" name="name" placeholder='John Doe' className=' px-2 h-12 w-full outline-none'  value={props.values.name}
                        onChange={props.handleChange("name")} onBlur={()=>{
                settext("w-0")
              }} onFocus={()=>{
                settext("w-full")
              }}/>
              <div className={` h-[1px] transition-all duration-500 ease-in-out ${text} bg-main absolute bottom-0 left-0`}></div>
              <div className={` h-[1px] w-full opacity-15 bg-main absolute bottom-0 left-0`}></div>
            </div>
            <div className=' mb-5 relative'>
              <p  className=' text-sm font-medium'>Email<span className=' text-red  font-normal'>*</span></p>
              <Field type="email" name="email" placeholder='example@mail.com' className='px-2 h-12 w-full  outline-none'  value={props.values.email}
                        onChange={props.handleChange("email")} onBlur={()=>{
                setemail("w-0")
              }} onFocus={()=>{
                setemail("w-full")
              }}/>

              <div className={` h-[1px] transition-all duration-500 ease-in-out ${email} bg-main absolute bottom-0 left-0`}></div>
              <div className={` h-[1px] w-full opacity-15 bg-main absolute bottom-0 left-0`}></div>
            </div>
            <div className=' w-full relative mb-5'>
              <p  className=' text-sm font-medium'>Message<span className=' text-red font-normal'>*</span></p>
              <Field as="textarea" name="comment"  placeholder='Hi Jonah,' className=' p-2 w-full h-60 outline-none' value={props.values.comment}
                      onChange={props.handleChange("comment")} onBlur={()=>{
                settext2("w-0")
              }} onFocus={()=>{
                settext2("w-full")
              }}/>

<div className={` h-[1px] transition-all duration-500 ease-in-out ${text2} bg-main absolute bottom-0 left-0`}></div>
              <div className={` h-[1px] w-full opacity-15 bg-main absolute bottom-0 left-0`}></div>
            </div>
            {load?<div>
              <input type='submit' className='font-Worksans whitespace-nowrap overflow-hidden   w-44 bg-main font-normal rounded-3xl h-10  text-white text-[1rem] flex  items-center group justify-center cursor-pointer shadow-lg'/>
            </div>: (
                    <ReactLoading
                      type="spin"
                      color={"#212121"}
                      height={"4%"}
                      width={"4%"}
                      className=" mt-2 ml-2"
                    />
                  )}
                   {result && (
                    <div className=' flex '>
                      <div className=" rounded-md font-medium  py-5 px-3 text-main mt-2">{wording}</div>
                    </div>
                  )}
          </Form>)}}</Formik>
          </div>
          <div className=' hidden md:block'>
            <div><h1 className=' font-medium text-sm'>More contact options</h1></div>
            <div className=' flex sm:items-center flex-col sm:flex-row text-sm font-medium mt-1'>
              <p className=' mr-5 mb-2 sm:mb-0'  onClick={()=>{
                                        window.location.href = "https://cal.com/jonahjohnzon/appointment"
                                    }}><Text name="Online consultation "/></p>
              <p onClick={()=>{
                                        window.location.href = "mailto:jonahjohnzon@gmail.com"
                                    }}><Text name="jonahjohnzon@gmail.com"/></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>}</AnimatePresence>
  )
}

export default Book
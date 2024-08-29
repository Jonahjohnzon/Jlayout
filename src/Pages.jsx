import React, { useEffect } from 'react'
import Navbar from './Nav/Navbar'
import Page from './Pages/Main/Page'
import Project from './Pages/Main/Component/Project'
import Table from './Pages/Main/Component/Table'
import Pricing from './Pages/Main/Component/Pricing'
import Fact from './Pages/Main/Component/Fact'
import Vision from './Pages/Main/Component/Vision'
import Faq from './Pages/Main/Component/Faq'
import Footer from './Pages/Main/Component/Footer'
import { animateScroll as scroll } from 'react-scroll';
import Book from './Book'


const Pages = () => {
  
useEffect(()=>{
  scroll.scrollToTop();

},[])
  return (
    <div>
        <section className='  bg-gray  font-Worksans'>
          <Book/>
            <Navbar/>
            <Page/>
            <div id="project">
            <Project/>
            </div>
            <div id="table">
            <Table/>
            </div>
            <div id='price'>
            <Pricing/>
            <Fact/>
            </div>
            <div id="faq">
            <Vision/>
            <Faq/>
            </div>
            <Footer/>
        </section>
    </div>
  )
}

export default Pages
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import WorksDetailsModule from '../components/WorksDetails/WorksDetailsModule'

const worksDetail = () => {
  return (
    <>
    <Navbar/>
        <WorksDetailsModule/>
    <Footer/>
    </>
  )
}

export default worksDetail
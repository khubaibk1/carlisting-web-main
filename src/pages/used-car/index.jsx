import Footer from '@/components/footer/Footer'
import PageNav from '@/components/navbar/PageNav'
import UsedCar from '@/components/usedcar/UsedCar'
import React from 'react'

const index = () => {
  return (
    <div>
        <PageNav/>
        <UsedCar/>
        <Footer/>
    </div>
  )
}

export default index
import React from 'react'
import Header from '../components/Header'

import MainNavbar from '../components/MainNavbar'

import CarouselSection from '../components/Carousel'
import Consultation from '../components/Consultation'


export default function Home() {
  return (
    <div>
        <div className="wrapper">
            <Header />
        </div>
        <CarouselSection />
        <Consultation />
        
    </div>
  )
}

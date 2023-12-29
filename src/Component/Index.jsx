import React from 'react'
import Header from './Header/Header'
import Service from './ServiceUrban/Service'
import './index.css'
import Login from './Login'
import Carousel from './ProvidingService/Carousel'
import NewAndNoteWorthy from './NewAndNoteWorthhy/NewAndNoteWorthy'
import Footer from './Footer/Footer'

function Index() {
  return (<div>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Service />
      </div>
      <div className='carousel'>
      <Carousel />
      </div>
      <NewAndNoteWorthy />
      <Footer />
    </div>
  ) 
}

export default Index
import React from 'react'

import {Footer, Blog, Possibility, Features, WhatGPT5, Header} from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>    {/* DONE */}
          <Header/>    {/* DONE */}
        </div>
        <Brand/>       {/* DONE */}
        <WhatGPT5/>    {/* DONE */ }
        <Features/>    {/* DONE */}
        <Possibility/> {/* DONE */}
        <CTA/>         {/* DONE */}
        <Blog/>        {/* DONE */}
        <Footer/>      {/* DONE */}
    </div>
  )
}

export default App
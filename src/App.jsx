
// Creating App component

import React from 'react'
import Greet from './components/Greet'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Greet/>
     <Header/>
     <MainContent/>
     <Footer/>
    </div>
  )
}

export default App

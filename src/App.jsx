import { useState } from 'react'

import './App.css'
import  Header from "./Components/Header";
import Home from './Components/Home';
import Foodcard from './Components/Foodcard';
import Footer from './Components/Footer';
function App() {
  
  return (
    <>
      <Header/>
      <Home/>
      <Foodcard/>
      <Footer/>
    </>
  )
}

export default App

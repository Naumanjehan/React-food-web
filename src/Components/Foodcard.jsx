import React from 'react'
import foodimage1 from "../assets/pizza.png"
import foodimage2 from "../assets/plateburger.png"
import foodimage3 from "../assets/zinger.png"

function Foodcard() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Explore Foods</h1>
    <div>
    <ul className='ulimage'>
        <li><img className='foodimg' src={foodimage1} alt="" /></li>
        <li><img className='foodimg' src={foodimage2} alt="" /></li>
        <li><img className='foodimg' src={foodimage3} alt="" /></li>
    </ul>
    </div>
    </>
  )
}

export default Foodcard

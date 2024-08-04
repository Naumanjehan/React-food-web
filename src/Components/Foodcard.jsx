import '../App.css'
import foodimage1 from "../assets/pizza.png"
import foodimage2 from "../assets/plateburger.png"
import foodimage3 from "../assets/zinger.png"

function Foodcard() {
  return (
    <main>
      <h1 style={{textAlign:"center"}}>Explore Foods</h1>
    <div className='mainCotianer'>
    <div className='Foodcontainer'>
    <ul>
        <li><img className='foodimg' src={foodimage1} alt="" /></li>
        <li><img className='foodimg' src={foodimage2} alt="" /></li>
        <li><img className='foodimg' src={foodimage3} alt="" /></li>

    </ul>
    </div>
    </div>
    </main>
  )
}

export default Foodcard

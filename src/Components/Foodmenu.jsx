import pizza from '../assets/sm1.png'
import momos from '../assets/sm2.png'
import burger from '../assets/sm3.png'
import vector from '../assets/sm4.png'
import great from '../assets/sm5.png'
import menFood from '../assets/sm2.png'


function Foodmenu() {
    return (
        <>
      <h1 style={{textAlign:"center", justifyContent:"center"}}>Food Menu</h1>
      <main className='foodmenu' >
        <div className='mainContainer'>
         <div className="container">
        <div className="image">
         <img src={pizza} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.3</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>
    </div>  
      <div className="container">
        <div className="image">
         <img src={momos} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.3</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={burger} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.4</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={vector} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$3.4</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={great} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.1</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>     
    </div>
    <div className="container">
        <div className="image">
         <img src={menFood} alt="burger" className='images'/>
        </div>
        <div className="food-title">
            <h3>Food Title</h3>
            <h3>$2.0</h3>
            <p>Made with italian sauce, chicken and oraganice vegetable</p>
            <button>Order Now</button>
        </div>    
    </div>
    </div>
    <p href=" " className='seeMore'><a href="">See more</a></p> 
    </main>
    </>
  )
}

export default Foodmenu
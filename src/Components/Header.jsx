import image from "../assets/logo.png";

function Header() {
  return (
        <nav>
    <div>
            <img className='logoimg' src={image}/>
    </div>
            <ul>
             <li>Home</li>
             <li>About</li>
             <li>Foods</li>
             <li>Contact</li>
            </ul>
      
        </nav>
  )
}

export default Header

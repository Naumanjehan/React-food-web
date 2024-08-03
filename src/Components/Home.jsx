
import coveriamge from "../assets/cover-image.jpg"

import '../App.css'

function Home() {
  return (
<>
      <div>
          <img className="coverimage" src={coveriamge}/>
      </div>
      <span style={{marginTop:"-100px"}}>
      <input type="text" placeholder="Search for Food" style={{width: "400px",height:"40px", borderRadius:"5px"}}/>
      </span>

</>

  )
}

export default Home

import coveriamge from "../assets/cover-image.jpg"

import '../App.css'

function Home() {
  return (
<>
      <div className="homepage">
          <img className="coverimage" src={coveriamge}/>
      </div>
      <div className="Search-item">
      <input className="searchfood" type="text" placeholder="Search for Food" />
      <button type="button" style={{padding: "10px", backgroundColor:"tomato", marginLeft:"3px", fontSize:"16px", borderRadius:"5px"}}>Search</button>
      </div>
</>
  )
}
export default Home

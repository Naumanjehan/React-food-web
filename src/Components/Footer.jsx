import '../App.css'
import footerimage1 from "../assets/fb.png"
import footerimage2 from "../assets/instagram.png"
import footerimage3 from "../assets/twitter.png"

function Footer() { 
  return (
    <>
    <footer>
        <div className="footerCotaienr">
            <img src={footerimage1} alt="logo" />
            <img src={footerimage2} alt="logo" />
            <img src={footerimage3} alt="logo" />
        </div>
    </footer>
    <p style={{textAlign:"center", fontFamily: "monospace", fontSize:"14px"}}>All rights Reserved Designed by <span style={{color:"red"}}>NaumanJehan</span></p>
    </>
  )
}

export default Footer

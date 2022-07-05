import Navigation from "../../shared/Navigation"
import logo from "./../../assets/images/logo.svg"
import "./header.css"
import {useState} from "react"

function Header(props) {
 const [araia,setAraia] = useState("false")
const [shownav,setShownav] = useState("false")
 const handleClick =()=>{ 
if (araia==="false") {
  setAraia("true")
  setShownav("true")
} else {
  setAraia("false");
  setShownav("false");
}

 }
 
 return (
   <header>
     <div className="head">
       <h1 className="logo">
         <img src={logo} alt="loopstudios logo icon" />
       </h1>
       <button
         className="hamburger"
         aria-controls="header-nav"
         aria-expanded={araia}
         onClick={handleClick}
         role="navigation menu"
       >
         <span className="sr-only">menu</span>
       </button>
       <Navigation
         navlist={props.navlist}
         className={"header-nav"}
         data={shownav}
       />
      
     </div>{" "}
     <div className="title">
       <h2>{props.title}</h2>
     </div>
   </header>
 );
}

export default Header
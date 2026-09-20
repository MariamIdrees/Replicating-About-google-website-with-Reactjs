import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"



const Header = ()=>{
   const [toggle, setToggle]= useState(false)
    const toggleSwitch = () => {
        setToggle (!toggle)
    }
    return(
     
        
        <div className="headerDiv">
            
           <section className="googleLogo">
             <img src ="./src/assets/images/googlelogoabout.png" alt=" Google About Logo"/>
           </section>
           <section className="navigation">
            <Link to="/">
            <div>
                <nav>About</nav>
            </div>
            </Link>

             <Link to="/Products">
            <div>
                <nav>Products</nav>
            </div>
            </Link>

            <Link to="/company">
            <div>
                <nav>Company Info</nav>
            </div>
            </Link>
            <Link to="/News">
            <div>
                <nav>News</nav>
            </div>
            </Link>

          
           <section className="hamburger" onclick={toggleSwitch} img src="./src/assets/images/hamburger.png" alt="hamburger" />
            </section >
            <Sidebar/>

           </div>
       
    
       
       
       
    )
}
export default Header

import "./Header.css"
import { Link } from "react-router-dom"

const Header = ()=>{
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

           </section>
        </div>
    )
}
export default Header

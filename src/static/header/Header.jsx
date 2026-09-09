import "./Header.css"

const Header = ()=>{
    return(
        <div className="headerDiv">
           <section className="logo">
             <img src ="./src/assets/images/google-logo-about.svg" alt="Logo"/>
           </section>
           <section className="navigation">
            <nav>About</nav>
            <nav>Products</nav>
            <nav>Company Info</nav>
            <nav>News</nav>
           

           </section>
        </div>
    )
}
export default Header
import "./Sidebar.css"
import { NavLink } from "react-router-dom"

const Sidebar = ({toggle}) => {
   
    
  return (
    <div className="sidebarContainer">
       
       
            <section className="sidebarMenu">
               <NavLink onClick={toggle} to= "/">
               </NavLink>
                  
           
                
                 {toggle ? <Sidebar toggle= {toggle}/> : null}
            </section>
           
          
    </div>
  )
}

export default Sidebar
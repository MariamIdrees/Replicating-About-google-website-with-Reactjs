import "./Googleresearch2.css"
import Cards from "../../../reusable/cards/Cards"
import Googlelab from "../../../../assets/companyimages/googlelab.png"
import Googledevs from "../../../../assets/companyimages/googledevs.png"
import Googlecloud from "../../../../assets/companyimages/googlecloud.png"
import arrow from "../../../../assets/images/arrow.png"


const Googleresearch2 =() =>{
    return(
        <div className="googleResearch2Container">
         <Cards
         cardImage={Googlelab}
         cardText= "Google Lab"
         cardIcon={arrow}
          /> 
         
          
             <Cards
         cardImage={Googledevs}
         cardText= "Google for developers"
         cardIcon={arrow}      
          /> 
          
        
             <Cards
         cardImage={Googlecloud}
         cardText= "Google Cloud"
          cardIcon={arrow}
          /> 
        
        <arrow/>
        </div>
    )
}
export default Googleresearch2
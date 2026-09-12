import Cards from "../../../reusable/cards/Cards"
import "./ThreeCards.css";
import threecards1 from "../../../../../src/assets/images/threecards1.png"
import threecards2 from "../../../../../src/assets/images/threecards2.png"
import threecards3 from "../../../../../src/assets/images/threecards3.png"
import arrow from "../../../../assets/images/arrow.png"


const ThreeCards = () => {
    return(
      
        <div className="threeCardsDiv">
         
         <Cards
         cardImage={threecards1}
         cardText= "Explore our products and features across Search, Google Workspace, and more"
         cardIcon={arrow}
          /> 
         
          
             <Cards
         cardImage={threecards2}
         cardText= "Learn all about our leading AI models — and discover their capabilities"
         cardIcon={arrow}      
          /> 
          
        
             <Cards
         cardImage={threecards3}
         cardText= "See how we’re tackling some of the most challenging problems in computer science"
          cardIcon={arrow}
          /> 
        
        <arrow/>
        </div>
    )
}

export default ThreeCards;
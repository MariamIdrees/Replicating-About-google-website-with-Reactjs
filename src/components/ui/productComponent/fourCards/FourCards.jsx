import "./FourCards.css"
import fourcards1 from "../../../../assets/productsimages/fourcards1.png"
import fourcards2 from "../../../../assets/productsimages/fourcards2.png"
import fourcards3 from "../../../../assets/productsimages/fourcards3.png"
import fourcards4 from "../../../../assets/productsimages/fourcards4.jpeg"
import Cards from "../../../reusable/cards/Cards"

const FourCards = () => {
    return (
        <div className="fourCardsContainer">
            <div className="fourCardsText">
           <Cards
           cardImage={fourcards1}
           cardText="Product support"
           
           />

           <Cards
           cardImage={fourcards2}
           cardText="Google Store"
           
           />

           <Cards
           cardImage={fourcards3}
           cardText="Google Account"
           
           />

           <Cards
           cardImage={fourcards4}
           cardText="Accessibility support"
           
           />
           </div>
        </div>
    )
}
export default FourCards
import "./FourCards.css"
import HorizontalCards from "../../../reusable/horizontalcards/HorizontalCards"
import FourCards1 from "./../../../../assets/productsimages/fourcards1.png"
import FourCards2 from "./../../../../assets/productsimages/fourcards2.png"
import FourCards3 from "./../../../../assets/productsimages/fourcards3.png"
import FourCards4 from "./../../../../assets/productsimages/fourcards4.jpeg"
import Arrow from "../../../../assets/images/arrow.png"



const FourCards = () => {
    return (
        <div className="fourCardsContainer">
             <HorizontalCards
            HorizontalCardText = "Product support"
            HorizontalCardIcon = {Arrow}
            HorizontalCardImage = {FourCards1}
            />

             <HorizontalCards
            HorizontalCardText = "Google Store"
            HorizontalCardIcon = {Arrow}
            HorizontalCardImage = {FourCards2}
            />
           
            <HorizontalCards
            HorizontalCardText = "Google Account"
            HorizontalCardIcon = {Arrow}
            HorizontalCardImage = {FourCards3}
            />

             <HorizontalCards
            HorizontalCardText = "Accessibility support"
            HorizontalCardIcon = {Arrow}
            HorizontalCardImage = {FourCards4}
            />
           
        </div>
    )
}
export default FourCards
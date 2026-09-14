import "./Company4cards.css"
import HorizontalCards from "../../../reusable/horizontalcards/HorizontalCards"
import Googlecareer from "../../../../assets/companyimages/googlecareer.png"
import Googlebike from "../../../../assets/companyimages/googlebike.png"
import Photographer from "../../../../assets/companyimages/photographer.png"
import Googlewoman from "../../../../assets/companyimages/googlewoman.png"
import Forwardarrow from "../../../../assets/companyimages/forwardarrow.png"


const Company4cards =() =>{
    return(
        <div className="company4cardsContainer">
            <HorizontalCards
            HorizontalCardText = "Careers"
            HorizontalCardIcon = {Forwardarrow}
            HorizontalCardImage = {Googlecareer}
            />

             <HorizontalCards
            HorizontalCardText = "Locations"
            HorizontalCardIcon = {Forwardarrow}
            HorizontalCardImage = {Googlebike}
            />
           
            <HorizontalCards
            HorizontalCardText = "Around the globe"
            HorizontalCardIcon = {Forwardarrow}
            HorizontalCardImage = {Photographer}
            />

             <HorizontalCards
            HorizontalCardText = "Contact us"
            HorizontalCardIcon = {Forwardarrow}
            HorizontalCardImage = {Googlewoman}
            />
           
           
           
        </div>
    )
}
export default Company4cards
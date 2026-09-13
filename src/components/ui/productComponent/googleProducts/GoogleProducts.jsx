import "./GoogleProducts.css"
import Smallcards from "../../../reusable/smallcards/Smallcards"
import Android from "../../../../assets/productsimages/android.png"
import Chrome from "../../../../assets/productsimages/chrome.png"
import Gemini from "../../../../assets/productsimages/geminilogo.png"
import Gmail from "../../../../assets/productsimages/gmail.png"
import Googlecalender from "../../../../assets/productsimages/googlecalender.png"
import Googledocs from "../../../../assets/productsimages/docslogo.png"
import Maps from "../../../../assets/productsimages/maps.png"
import Googlephotos from "../../../../assets/productsimages/googlephotos.png"
import Googleplay from "../../../../assets/productsimages/playstore.png"
import Googlepixel from "../../../../assets/productsimages/productgooglelogo.png"
import Googlesearch from "../../../../assets/productsimages/productgooglelogo.png"
import Youtube from "../../../../assets/productsimages/youtube.png"
import Arrow from "../../../../assets/images/arrow.png"


const GoogleProducts = () =>{
    return(
        <div className="googleProductsContainer">
          {/* <div className="googleProductsWrapper">
            <h1>Google products</h1>
            <div className="googleProductsFilter"> 
                <p>Filter by:</p>

            </div>
          </div> */}
           

          < Smallcards
           SmallcardImage = {Android}
           SmallcardText = "Android"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Chrome}
           SmallcardText = "Chrome"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Gemini}
           SmallcardText = "Gemini"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Gmail}
           SmallcardText = "Gmail"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Googlecalender}
           SmallcardText = "Google Calender"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Googledocs}
           SmallcardText = "Google Docs"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Maps}
           SmallcardText = "Maps"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Googlephotos}
           SmallcardText = "Google photos"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Googleplay}
           SmallcardText = "Google play"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Googlepixel}
           SmallcardText = "Google pixel"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Googlesearch}
           SmallcardText = "Google search"
           SmallcardIcon = {Arrow}
          />

           < Smallcards
           SmallcardImage = {Youtube}
           SmallcardText = "Youtube"
           SmallcardIcon = {Arrow}
          />

          
        </div>
    )
}
export default GoogleProducts
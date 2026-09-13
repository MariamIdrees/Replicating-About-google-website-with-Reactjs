import "./Googleresearch1.css"
import Biggerards from "../../../reusable/biggercards/Biggercards"
import googlebluesplash from  "../../../../assets/companyimages/googlebluesplash.png"
import research from  "../../../../assets/companyimages/research.png"
import arrow from "../../../../assets/images/arrow.png"





const Googleresearch1 =() =>{
    return(
        <div className="googleResearch1Container">
          
          <div className="googleResearch1Text">
            <h1>Research and technology</h1>
            <p>Our teams are working to solve complex challenges, advance the field of AI and help as many people as possible.</p>
          </div>
         <Biggerards
            biggercardImage={googlebluesplash}
            biggercardText="Google DeepMind"
            biggercardIcon={arrow}
           />
            <Biggerards/>

            <Biggerards
            biggercardImage={research}
            biggercardText="Google Research"
            biggercardIcon={arrow}
           />
            <Biggerards/>
        </div>
    )
}
export default Googleresearch1
import "./Whatwedo.css"


const Whatwedo =() =>{
    return(
        <div className="whatwedoContainer">
             <div className="ourstoryPolicy">
         <div className="ourStory"> 
            <div className="ourstoryImage">
              <img src="./src/assets/companyimages/googledesktop.png" alt="google desktop" />
            </div>
         <div className="ourstoryText"> 
             <p>OUR STORY</p>
             <p>Take a trip through Google’s history — from the garage to the Googleplex.</p>
         </div>
         <div className="gridarrow">
            <img src="./src/assets/images/arrow.png" alt="arrow" />
         </div>
         </div>

          <div className="publicPolicy">
            <div className="publicpolicyText">
         <p>PUBLIC POLICY</p>
         <p>We’re committed to working with governments, companies and communities to create a safe and resilient digital future.</p>
         </div>
          <div className="gridarrow">
             <img src="./src/assets/images/arrow.png" alt="arrow" /> 
          </div>
         </div>


      
       </div>


      <div className="socialCommitment">

         <div className="socialImpacts">
            <div className="socialImpactsText">
         <p>SOCIAL IMPACT</p>
         <p>Discover how we’re using AI to help solve society’s biggest challenges.</p>
         </div>
         <div>
            <img src="./src/assets/images/arrow.png" alt="arrow icon" />
         </div>
       </div>
     
        <div className="commitments">
             <div>
                <img src="./src/assets/companyimages/googleengineer.png" alt="google engineer" />
              </div>
             <div>
               <div className="commitmentText">
               <p>COMMITMENTS</p>
               <p>From protecting users to expanding opportunity, learn more about our values and priorities.</p>
               </div>
            <div className="gridsecondarrow">
               <img src="./src/assets/images/arrow.png" alt="arrow icon" />
             </div>
            </div>
            </div>
        </div> 

        </div>
    )
}
export default Whatwedo
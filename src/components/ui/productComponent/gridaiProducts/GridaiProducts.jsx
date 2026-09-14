import  "./GridaiProducts.css"

const GridaiProducts = ()=>{
    return(
        <div className="gridaiproductContainer">
            <div>
                <h1>Discover more ways to use AI in our products</h1>
            </div>
            <div className="gridaiproductWrapper">
       <div className="googleGeminiWorkspace">
         <div className="googlePhotos"> 
            <div className="googlePhotosImage">
              <img src="./src/assets/productsimages/hugs.png" alt="google friendship hugs" />
            </div>
         <div className="googlePhotosText"> 
             <p>GOOGLE PHOTOS</p>
             <p>Create scroll-stoppers with AI editing tools like Reimagine and Magic Eraser</p>
         </div>
         <div className="gridarrow">
            <img src="./src/assets/images/arrow.png" alt="arrow" />
         </div>
         </div>

          <div className="geminiWorkspace">
            <div className="geminiWorkspaceText">
         <p>GOOGLE WORKSPACE WITH GEMINI</p>
         <p>Get your work done faster with gemini, built right into Gmail, Docs, Sheets and more</p>
         </div>
          <div>
             <img src="./src/assets/images/arrow.png" alt="arrow" /> 
          </div>
         </div>


      
       </div>


      <div className="geminiMaps">

         <div className="chromeGemini">
            <div className="chromeGeminiText">
         <p>GEMINI ON CHROME</p>
         <p>Get AI assistance right in your browser to complete taskes quickly and safely.</p>
         </div>
         <div>
            <img src="./src/assets/images/arrow.png" alt="arrow icon" />
         </div>
       </div>
     
        <div className="googleMaps">
             <div>
                <img src="./src/assets/productsimages/maplocation.png" alt="maps showing different locations" />
              </div>
             <div>
               <div className="googleMapsText">
               <p>GOOGLE MAPS</p>
               <p>Ask Maps for imspiration about things to do and virtually explore places and routes before you go</p>
               </div>
            <div className="gridsecondarrow">
               <img src="./src/assets/images/arrow.png" alt="arrow icon" />
             </div>
            </div>
            </div>
        </div> 

     </div>
        </div>
    )
}
export default GridaiProducts
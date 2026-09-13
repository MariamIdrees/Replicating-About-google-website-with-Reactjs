import "./GridCards.css"


const GridCards = () => {
    return(
        <div className="gridCardsContainer">
         <div className="circleSearchWork">
         <div className="circleSearch"> 
            <div className="circleSearchImage">
              <img src="./src/assets/productsimages/gridcard1.png" alt="grid card one" />
            </div>
         <div className="circleSearchText"> 
             <p>CIRCLE TO SEARCH</p>
             <p>Circle, highlight or tap to search anything on your Android device</p>
         </div>
         <div className="gridarrow">
            <img src="./src/assets/images/arrow.png" alt="arrow" />
         </div>
         </div>

          <div className="aiMode">
            <div className="aimodeText">
         <p>AI MODE</p>
         <p>Ask anything and get an AI-powered response. Then, keep exploring with follow-up questions and web links.</p>
         </div>
          <div>
             <img src="./src/assets/images/arrow.png" alt="arrow" /> 
          </div>
         </div>


      
       </div>


      <div className="searchworkLens">

         <div className="searchWork">
            <div className="searchworkText">
         <p>HOW SEARCH WORKS</p>
         <p>Get the details on how Search works — from the approach we take, to the technology behind it.</p>
         </div>
         <div>
            <img src="./src/assets/images/arrow.png" alt="arrow icon" />
         </div>
       </div>
     
        <div className="lens">
             <div>
                <img src="./src/assets/productsimages/gridcard2.png" alt="grid card 2" />
              </div>
             <div>
               <div className="lensText">
               <p>LENS</p>
               <p>Go beyond words: Search with your camera, an image or whatever’s on your screen.</p>
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
export default GridCards
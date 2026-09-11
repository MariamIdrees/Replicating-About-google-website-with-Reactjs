import "./GridCards.css"


const GridCards = () => {
    return(
        <div className="gridCardsContainer">
        <div className="circleSearch"> 
            <div className="circleSearchImage">
              <img src="./src/assets/productsimages/gridcard1.png" alt="grid card one" />
            </div>
         <div className="circleSearchText"> 
             <p>CIRCLE TO SEARCH</p>
             <h2>Circle, highlight or tap to search anything on your Android device</h2>
         </div>
         <div>
            {/* <img src="./src/assets/images/arrow.png" alt="arrow" /> */}
         </div>
         </div>

      <div className="searchWork">
         <h2>HOW SEARCH WORKS</h2>
         <p>Get the details on how Search works — from the approach we take, to the technology behind it.</p>
         <div>
            <img src="" alt="" />
         </div>
       </div>

      <div className="aiMode">
         <h2>AI MODE</h2>
         <p>Ask anything and get an AI-powered response. Then, keep exploring with follow-up questions and web links.</p>
          <div>
             <img src="" alt="" />
          </div>
         </div>

        <div className="lens">
             <div>
                <img src="" alt="" />
              </div>
             {/* <div>
               <h2>LENS</h2>
               <p>Go beyond words: Search with your camera, an image or whatever’s on your screen.</p>
            <div>
               <img src="" alt="" />
             </div>
            </div> */}
        </div>


   

        </div>
    )
}
export default GridCards
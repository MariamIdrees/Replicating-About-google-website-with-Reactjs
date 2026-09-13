import "./Outreach.css"


const Outreach =() =>{
    return(
        <div className="outreachContainer">
            <div className="outreachWrapper">
           <div className="outreachText">
            <h1>Outreach and initiatives</h1>
            <p>Dive deeper into our efforts across sustainability, accessibility and community engagement.</p>
          
           </div>
             <div className="outreachGrid">
                  <div className="sustainabilityWrapper"> 
            <div className="sustainabilityImage">
              <img src="./src/assets/companyimages/sustainability.png" alt="sustainability image" />
            </div>
         <div className="sustainabilityText"> 
             <h5>Sustainability</h5>
             <p>Learn about our work to help build a more sustainable future.</p>
         </div>
         <div className="gridarrow">
            <img src="./src/assets/images/arrow.png" alt="arrow" />
         </div>
         </div>

         <div className="googlewomenpixel">
            <div className="googlethreeWomen">
                <div className="googlethreeWomenImage">
                   <img src="./src/assets/companyimages/threewomen.png" alt="three women image" />
                </div>
                <div className="threeWomenText"> 
             <h1>Google.org</h1>
             <p>We provide funding and tech expertise to support underserved communities and expand opportunity for everyone.</p>
         </div>
         <div className="gridarrow">
            <img src="./src/assets/images/arrow.png" alt="arrow" />
         </div>

            </div>

            <div className="googlebluePixel">
                 <div className="googlebluePixelImage">
                   <img src="./src/assets/companyimages/googlebluepixel.png" alt="blue pixel image" />
                </div>
                <div className="googlebluePixelText"> 
             <h1>Google.org</h1>
             <p>We provide funding and tech expertise to support underserved communities and expand opportunity for everyone.</p>
         </div>
         <div className="gridarrow">
            <img src="./src/assets/images/arrow.png" alt="arrow" />
         </div>


            </div>


         </div>


            </div>
            </div>
        </div>
    )
}
export default Outreach
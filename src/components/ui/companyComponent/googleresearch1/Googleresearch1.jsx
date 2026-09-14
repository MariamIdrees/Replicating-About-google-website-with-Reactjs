import "./Googleresearch1.css"





const Googleresearch1 =() =>{
    return(
        <div className="googleResearch1Container">
          
          <div className="googleResearch1Text">
            <h1>Research and technology</h1>
            <p>Our teams are working to solve complex challenges, advance the field of AI and help as many people as possible.</p>

            <div className="biggerCardsWrapper">
                <div className="googledeepMind">
                    <div className="googledeepMindImage">
                        <img src="./src/assets/companyimages/googlebluesplash.png" alt="google splash image" />
                    </div>
                    <div className="googledeepMindText">
                       <p>Google DeepMind</p>

                    </div>
                    <div className="arrow">
                        <img src="./src/assets/images/arrow.png" alt="arrow" />
                    </div>

                </div>

                <div className="researchWoman">
                       <div className="googledeepMindImage">
                        <img src="./src/assets/companyimages/research.png" alt="research woman image" />
                    </div>
                    <div className="researchWomanText">
                        <p>Google Research</p>

                    </div>
                    <div className="arrow">
                        <img src="./src/assets/images/arrow.png" alt="arrow" />
                    </div>


                </div>

            </div>
          </div>
        
        </div>
    )
}
export default Googleresearch1
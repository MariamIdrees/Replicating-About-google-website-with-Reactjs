import "./Biggercards.css"




const Biggercards =({biggercardImage, biggercardText, biggercardIcon}) =>{
    return(
        <div className="biggercardContainer">
            <div className="biggercardTextIconContainer">
            <div className="biggerImageSection">
               <img src={biggercardImage} alt="" />
            </div>
             <div className="biggertextSection">
              <p>
                 {biggercardText}
              </p>
              </div>
              <div className="biggericonSection">
                <img src={biggercardIcon} />

              </div>
              </div>
        </div>
    )
}

export default Biggercards
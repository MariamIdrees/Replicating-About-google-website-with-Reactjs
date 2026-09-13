import "./Smallcards.css"




const Smallcards =({SmallcardImage, SmallcardText, SmallcardIcon}) =>{
    return(
        <div className="smallcardContainer">
            <div className="smallcardTextWrapper">
            <div className="smallcardimageSection">
               <img src={SmallcardImage} alt="" />
            </div>
             <div className="smallcardtextSection">
              <p>
                 {SmallcardText}
              </p>
              </div>
              <div className="smallcardiconSection">
                <img src={SmallcardIcon} />

              </div>
              </div>
        </div>
    )
}

export default Smallcards
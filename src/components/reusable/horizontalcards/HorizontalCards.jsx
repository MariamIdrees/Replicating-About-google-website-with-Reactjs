import "./HorizontalCards.css"




const HorizontalCards =({HorizontalCardText, HorizontalCardIcon, HorizontalCardImage}) =>{
    return(
        <div className="horizontalcardContainer">
            <div className="horizontalcardTextIconContainer">
           
             <div className="textIconFlex">
             <div className="horizontalCardTextSection">
              <p>
                 {HorizontalCardText}
              </p>
              </div>
              <div className="horizontalcardiconSection">
                <img src={HorizontalCardIcon} />
             </div>
             </div>
                 <div className="horizontalCardImageSection">
               <img src={HorizontalCardImage} alt="" />
            </div>
             
              </div>
        </div>
    )
}

export default HorizontalCards
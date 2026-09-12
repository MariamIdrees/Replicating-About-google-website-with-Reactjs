import "./Cards.css"




const Cards =({cardImage, cardText, cardIcon}) =>{
    return(
        <div className="cardContainer">
            <div className="cardTextIconContainer">
            <div className="imageSection">
               <img src={cardImage} alt="" />
            </div>
             <div className="textSection">
              <p>
                 {cardText}
              </p>
              </div>
              <div className="iconSection">
                <img src={cardIcon} />

              </div>
              </div>
        </div>
    )
}

export default Cards
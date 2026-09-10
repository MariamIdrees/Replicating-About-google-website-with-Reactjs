// import "./ThreeCards.css"




const Cards =({cardImage, cardText}) =>{
    return(
        <div className="cardContainer">
            <div className="imageContainer">
               <img src={cardImage} alt="" />
            </div>
              <p>
                 {cardText}
              </p>
        </div>
    )
}

export default Cards
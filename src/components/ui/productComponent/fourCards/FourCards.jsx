import "./FourCards.css"



const FourCards = () => {
    return (
        <div className="fourCardsContainer">
            <div className="fourCardsWrapper">
                <div className="productSupport">
                    <div className="productArrow">
                    <h3>Product Support</h3>
                    <img src="./src/assets/images/arrow.png" alt="arrow" />
                    </div>
                  <img src="./src/assets/productsimages/fourcards1.png" alt="four card1" />

                </div>
                <div className="googleStore">
                   <div className="productArrow">
                    <h3>Google store</h3>
                    <img src="./src/assets/images/arrow.png" alt="arrow" />
                    </div>
                  <img src="./src/assets/productsimages/fourcards2.png" alt="four card2" />

                </div>
                <div className="googleAccount">
                       <div className="productArrow">
                    <h3>Google Account</h3>
                    <img src="./src/assets/images/arrow.png" alt="arrow" />
                    </div>
                  <img src="./src/assets/productsimages/fourcards3.png" alt="four card3" />

                </div>
                <div className="accessibilty">
                    <div className="productArrow">
                    <h3>Accessibility</h3>
                    <img src="./src/assets/images/arrow.png" alt="arrow" />
                    </div>
                  <img src="./src/assets/productsimages/fourcards4.jpeg" alt="four card4" />


                </div>
          
           </div>
        </div>
    )
}
export default FourCards
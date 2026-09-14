import "./AndroidPixel.css"

const AndroidPixel = () =>{
    return (
        <div className="andriodPixelContainer">
            <h1>Get more done with Android and Pixel</h1>

           <div className="andriodPixelWrapper">
            <div className="androidWrapper">
                <div className="androidPhoneImage">
                      <img src="./src/assets/productsimages/androidphones.png" alt="android phones" />

                </div>
                <div className="pixelphoneText">
                    <p>All things Android</p>
                    <p>Check out a whole world of devices that work better together, plus AI features to help throughout your day.</p>
                    <a href="https://www.android.com/?utm_source=about.google&utm_medium=referral&utm_campaign=productspage"></a>
                </div>

            </div>
           

            <div className="pixelWrapper">
                <div className="pixelPhoneImage">
                      <img src="./src/assets/productsimages/pixelphones.png" alt="pixel phones" />

                </div>
                <div className="pixelphoneText">
                    <p>Our Pixel portfolio</p>
                    <p>See the latest Pixel lineup — from phones and watches, to earbuds and tablets.</p>
                </div>

            </div>
            </div>
           
        </div>
    )
}

export default AndroidPixel
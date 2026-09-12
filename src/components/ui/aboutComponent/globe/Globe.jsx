import "./Globe.css"

const globe = () =>{
    return(
        <div className="globeDiv">
          <div className="globeText">
             <img src="./src/assets/images/googleicon.png" alt="google icon" />

            <h1>Google around the globe</h1>
            <p>Learn about Google's work and impact around the world.</p>
            <button className="btn4">Explore</button>
          </div>


      <div className="globeTextBox">   
        <div className="globeText2">
            <h1>Get the latest news from Google in your <br /> inbox</h1>
            <p>Sign up to receive top stories from the week — from product announcements, to <br />everyday tips.</p>

              <button className="btn5">Subscribe</button>
          </div>
          
       </div>

        </div>
    )
}

export default globe 
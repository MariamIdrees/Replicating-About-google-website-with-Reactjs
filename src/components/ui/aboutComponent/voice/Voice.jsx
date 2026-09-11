import "./Voice.css"


const Voice = () => {
    return(
        <div className="voiceDiv">
              <div className="voiceImage">
                 <img src="./src/assets/images/voiceimage.webp" alt="voice picture" />
            </div>



           <div className="voiceText">
              <h1>Use your voice <br /> to get more <br /> done in Gmail,<br /> Docs, and Keep</h1>
              <p>Speak naturally to draft documents, locate important information from your inbox, and capture fleeting thoughts quickly.</p>
              <button className="btn3">see what's new</button>
           </div>
          
        </div>
    )
}

export default Voice
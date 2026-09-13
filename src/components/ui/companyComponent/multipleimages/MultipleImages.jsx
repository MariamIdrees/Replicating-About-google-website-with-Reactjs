import "./MultipleImages.css"


const MultipleImages =() =>{
    return(
        <div className="multipleImagesContainer">
           <div className="multipleTextWrapper">
               <div className="multipleImage">
                 <img src="./src/assets/companyimages/multipleimages.png" alt="multiple images" />
               </div>
               <h1>Our mission is to <span className="organize"> organize </span> the world’s  <span className="information">information </span> and make it <span className="universal"> universally accessible </span>and <span className="useful">useful </span></h1>
           </div>
        </div>
    )
}
export default MultipleImages
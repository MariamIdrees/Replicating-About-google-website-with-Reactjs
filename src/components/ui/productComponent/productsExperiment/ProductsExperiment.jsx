import "./ProductsExperiment.css"

const ProductsExperiment = ()=>{
    return(
        <div className="productExperimentContainer">
           <div className="productExperimentWrapper">
            <div className="productExperimentIconText">
                <img src="./src/assets/productsimages/labs.png" alt=" lab icon" />
                <h1>Try new AI products and experiments</h1>

            </div>
            <div className="rocketImagesWrapper">
            <div className="rocketImageText">
               <img src="./src/assets/productsimages/rocket.png" alt=" rocket image" />
               <div className="rocketTexts">
               <h1>Flow</h1>
               <p>Create cinematic clips, scenes and stories with our AI filmmaking tool.</p>
               <button className="button10">Check it out</button>
               </div>
            </div>
            <div className="folders">
                 <img src="./src/assets/productsimages/folders.png" alt=" folder image" />
            </div>
            </div>
           </div>
        </div>
    )
}
export default ProductsExperiment
import "./ProductCountries.css"

const ProductCountries = ()=>{
    return(
        <div className="productCountriesContainer">
          <div className="productCountriesWrapper">
            <img src="./src/assets/productsimages/exclamation.png" alt="exclamation icon" />
            <p>Products shown on this page are not available in all countries. Visit support.google.com for more information on specific product availability.</p>

          </div>
        </div>
    )
}
export default ProductCountries
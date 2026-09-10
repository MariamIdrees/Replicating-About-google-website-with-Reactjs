import "./Products.css"
import ProductHero from "../../components/ui/productComponent/productHero/ProductHero"
import FourCards from "../../components/ui/productComponent/fourCards/FourCards"
import SearchWays from "../../components/ui/productComponent/searchWays/SearchWays"
import GridCards from "../../components/ui/productComponent/gridCard/GridCards"
import ChatGemini from "../../components/ui/productComponent/chatGemini/ChatGemini"
import GeminiLive from "../../components/ui/productComponent/geminiLive/GeminiLive"
import AndroidPixel from "../../components/ui/productComponent/androidPixel/AndroidPixel"
import ProductExperiment from "../../components/ui/productComponent/productsExperiment/ProductsExperiment"
import GridaiProducts from "../../components/ui/productComponent/gridaiProducts/GridaiProducts"
import GoogleProducts from "../../components/ui/productComponent/gridaiProducts"
import ProductCountries from "../../components/ui/productComponent/productCountries/ProductCountries"



const Products = () =>{
    return (
        <div className="productsContainer">
           <ProductHero/>
           <FourCards/>
           <SearchWays/>
           <GridCards/>
           <ChatGemini/>
           <GeminiLive/>
           <AndroidPixel/>
           <ProductExperiment/>
           <GridaiProducts/>
           <GoogleProducts/>
           <ProductCountries/>
        </div>
    )
}
export default Products
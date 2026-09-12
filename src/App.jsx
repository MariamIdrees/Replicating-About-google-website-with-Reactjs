import { BrowserRouter, Routes, Route} from "react-router-dom"
// import Cards from "./components/reusable/cards/Cards"
import Header from "./static/header/Header"
import About from "./pages/about/About"
import Products from "./pages/products/Products"
import CompanyInfo from "./pages/company/CompanyInfo"
import News from "./pages/news/News"
import Footer from "./static/footer/Footer"


const App = () =>   {
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element= {<About/>}/>
    <Route path="/Products" element= {<Products/>}/>
    <Route path="/company" element= {<CompanyInfo/>}/>
    <Route path="/News" element= {<News/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
   
  
  
  
    </div>
  )
}

export default App

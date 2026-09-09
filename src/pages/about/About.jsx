import AboutHero from "../../components/ui/aboutComponent/aboutHero/AboutHero";
import ThreeCards from "../../components/ui/aboutComponent/threeCards/ThreeCards"
import Weather from "../../components/ui/aboutComponent/weather/Weather";  
import Voice from "../../components/ui/aboutComponent/voice/Voice"
import Globe from "../../components/ui/aboutComponent/globe/Globe"
import Header from "../../static/header/header";









const About = () =>{
    return(
           <div className="aboutDiv">
            {/* <h1>This is the about page</h1> */}
            <Header/>
          <AboutHero/>
          <ThreeCards/>
          <Weather/>
          <Voice/>
          <Globe/>
           </div>
    )
}

export default About
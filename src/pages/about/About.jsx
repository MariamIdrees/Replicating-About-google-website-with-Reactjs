import AboutHero from "../../components/ui/aboutComponent/aboutHero/AboutHero";
import ThreeCards from "../../components/ui/aboutComponent/threeCards/ThreeCards"
import Weather from "../../components/ui/aboutComponent/weather/Weather";  
import Voice from "../../components/ui/aboutComponent/voice/Voice"
import Globe from "../../components/ui/aboutComponent/globe/Globe"










const About = () =>{
    return(
           <div className="aboutDiv">
          <AboutHero/>
          <ThreeCards/>
          <Weather/>
          <Voice/>
          <Globe/>
           </div>
    )
}

export default About
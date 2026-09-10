import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footerContainer">
           <footer class="footerTexts">

<div className ="resources">
     <h4>Resources</h4>
<p>Blog</p>
<p>Brand Resource Center</p>
<p>Careers</p>
<p>Contact ss</p>
<p>Help Center</p>
<p>Investor Relations</p>
<p>Locations</p>
<p>Press resources</p>

</div>



<div className ="outreach">
       <h4>Outreach and initiatives</h4>
<p>Accessibility</p>
<p>Crisis Response</p>
<p>Google.org</p>
<p>Google for Health</p>
<p>Grow with Google</p>
<p>Learning</p>
<p>Public Policy</p>
<p>Sustainability</p>
</div>

<div className="research">
       <h4>Research and Technology</h4>
<p>Google AI</p>
<p>Google Cloud</p>
<p>Google DeepMind</p>
<p>Google for Developers</p>
<p>Google Labs</p>
<p>Google Research</p>
</div>



<div className="moreAboutUs">
       <h4>More about us</h4>
<p>Around the globe</p>
<p>Human rights</p>
<p>Safety Center</p>
<p>Supplier responsibility</p>
<p>Transparency Center</p>
<p>Transparency Report</p>
</div>



</footer>
<hr />
<div className="afterFooter">
<div className="afterFooter1">
    <div>
        <img src="./src/assets/images/footergoogle.png" alt="google footer" />
    </div>
    <p>Privacy</p>
    <p>Terms</p>

</div>

<div className="afterFooter2">
    <div className="helpQuestion">
        <img src="./src/assets/images/footerquestion.png" alt="question icon" />
    <p>Help</p>
    <p>English</p>
    </div>
     
     <div>
        <img src="./src/assets/images/footerarrow.png" alt="footer arrow" />
     </div>
</div>

</div>


        </div>
    )
}
export default Footer
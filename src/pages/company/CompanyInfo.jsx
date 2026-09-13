import MultipleImages from "../../components/ui/companyComponent/multipleimages/MultipleImages"
import Company4cards from "../../components/ui/companyComponent/company4cards/Company4cards"
import Googleresearch1 from "../../components/ui/companyComponent/googleresearch1/Googleresearch1" 
import Googleresearch2 from "../../components/ui/companyComponent/googleresearch2/Googleresearch2"
import Googleceo from "../../components/ui/companyComponent/googleceo/Googleceo"
import Whatwedo from "../../components/ui/companyComponent/whatwedo/Whatwedo"
import Googlegrowing from "../../components/ui/companyComponent/googlegrowing/Googlegrowing"
import Outreach from "../../components/ui/companyComponent/outreach/Outreach"
import Investor from "../../components/ui/companyComponent/investor/Investor"




import "./CompanyInfo.css"

const CompanyInfo = () =>{
    return(
        <div className="companyContainer">
            <MultipleImages/>
            <Company4cards/>
            <Googleresearch1/>
            <Googleresearch2/>
            <Googleceo/>
            <Whatwedo/>
            <Googlegrowing/>
            <Outreach/>
            <Investor/>
        </div>
    )
}
export default CompanyInfo 
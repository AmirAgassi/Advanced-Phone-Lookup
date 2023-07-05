import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import FadeIn from 'react-fade-in';

// Import the Canadian flag image
import canadaFlagImg from './caflag.png'

// Import the US flag image
import usFlagImg from './usflag.png'

// Import the US flag image
import verified from './verified.png'

// Import the US flag image
import unsure from './unsure.png'


const ProjectContainer = ({ project }) => (
  <FadeIn delay="15">
  <div className='project'>
    <h3>
      {project.name}
      {project.name === "Prefix Type" && project.description === "WIRELESS" && <img src={verified} alt="Verified Checkmark" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.name === "Prefix Type" && project.description === "RBOC" && <img src={verified} alt="Verified Checkmark" style={{ marginLeft: '8px', height: '20px' }} />}
      
      {project.companyidentified !== "N/A" && <img src={verified} alt="Verified Checkmark" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.companyidentified === "N/A" && project.name !== "Error" && project.name === "Company" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "ILEC" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "CLEC" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "IPES" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "ICO" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "PCS" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "L RESELLER" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === "UNKNOWN" && project.name === "Prefix Type" && <img src={unsure} alt="Unsure Symbol" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === 'CA' && <img src={canadaFlagImg} alt="Canadian flag" style={{ marginLeft: '8px', height: '20px' }} />}
      {project.description === 'US' && <img src={usFlagImg} alt="US flag" style={{ marginLeft: '8px', height: '20px' }} />}
    </h3>
    
    <p className='project__description'><strong>{project.description}</strong></p>
    <div style={{ height: 20}}> </div>
    {project.companyidentified === "N/A" && project.name !== "Error" && project.name === "Company" && <span>This is <strong>not likely</strong> a residential number.</span>}
    {project.description === "ILEC" && project.name === "Prefix Type" && <span>This number belongs to a <strong>businesses or private consumer</strong></span>}
    {project.description === "CLEC" && project.name === "Prefix Type" && <span>This number belongs to a <strong>company or service</strong></span>}
    {project.description === "ICO" && project.name === "Prefix Type" && <span>This number belongs to a <strong>company or service</strong></span>}
    {project.description === "L RESELLER" && project.name === "Prefix Type" && <span>This number belongs to a <strong>company or service</strong></span>}
    {project.description === "IPES" && project.name === "Prefix Type" && <span>This number belongs to a <strong>company or service</strong></span>}
    {project.description === "UNKNOWN" && project.name === "Prefix Type" && <span>We are unsure about the type of number.</span>}
    {project.description === "PCS" && project.name === "Prefix Type" && <span>This number may be <strong>residential</strong> or from a <strong>company</strong>.</span>}
    
    
    {project.description === "WIRELESS" && project.name === "Prefix Type" && <span>This number is a <strong>residential number</strong>.</span>}
    {project.description === "RBOC" && project.name === "Prefix Type" && <span>This number is a <strong>residential number</strong>.</span>}
    
    
    {project.description === "CA" && project.name === "Country" && <span>This is a <strong>Canadian</strong> number.</span>}
    {project.description === "US" && project.name === "Country" && <span>This is an <strong>American</strong> number.</span>}
    {project.companyidentified !== "N/A" && (
  <span>
    This is a verified, high quality provier linked to <strong>{project.companyidentified}</strong>.
  </span>
)}

  </div>
  </FadeIn>
)




export default ProjectContainer
 
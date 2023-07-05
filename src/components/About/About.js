import {useState} from 'react';
import ReactDOM from 'react-dom';
import PhoneInput from 'react-phone-number-input'
import FadeIn from 'react-fade-in';
import { about } from '../../portfolio'
import Projects from '../Projects/Projects'
import './About.css'
import 'react-phone-number-input/style.css'


const ResultComponent = ({ name, value }) => (
  <div className="result-item">
    <p>{name}: {value}</p>
  </div>
);

const About = () => {
  const { name, role, description, resume, social } = about
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [setErr] = useState('');
  const [value, setValue] = useState()
  let url = ""
  
  const replacements = {
  "bell": "Bell Mobility",
  "eastlink": "Eastlink Wireless",
  "freedom": "Freedom Mobile",
  "iristel": "Iristel",
  "rogers": "Rogers Wireless",
  "fido": "Fido Mobile",
  "chatr": "Chatr Mobile",
  "cityfone": "Cityfone",
  "primus": "Primus Wireless",
  "zoomer": "Zoomer Wireless",
  "simplyconnect": "SimplyConnect",
  "speakout": "Speakout Wireless",
  "phonebox": "Phonebox Mobile",
  "petro": "Petro-Canada Mobility",
  "sasktel": "SaskTel Mobility",
  "sogetel": "Sogetel Mobilité",
  "qiniq": "Qiniq",
  "tbay": "TbayTel Mobility",
  "telus": "Telus Mobility",
  "videotron": "Vidéotron Mobility",
  "fizz": "Fizz Mobile",
  "eleven": "7-Eleven Speak Out Wireless",
  "rasamobile": "Rasa Mobile",
  "dci": "DCI Wireless",
  "cansel": "Cansel Connect",
  "execulink": "Execulink Mobility",
  "good2go": "good2go Mobile Canada",
  "kore": "KORE Wireless",
  "onstar": "OnStar",
  "solo": "Solo Mobile",
  "clearnet": "Clearnet",
  "appalachian": "Appalachian Wireless",
  "bravado": "Bravado Wireless",
  "tussel": "Bug Tussel Wireless",
  "spire": "C Spire",
  "cellcom": "Cellcom Wireless",
  "cellular_one": "Cellular One",
  "carolina_west": "Carolina West Wireless",
  "chariton": "Chariton Valley Wireless",
  "chat_mobility": "Chat Mobility",
  "choice": "Choice Wireless",
  "colorado_valley": "Colorado Valley Communications",
  "commnet": "Commnet Wireless",
  "custer": "Custer Telephone Cooperative",
  "dish_wireless": "Dish Wireless",
  "boost": "Boost Mobile",
  "ting": "Ting Mobile",
  "republic": "Republic Wireless",
  "gen_mobile": "Gen Mobile",
  "dtc": "DTC Wireless",
  "etc": "ETC Wireless",
  "enhanced": "Enhanced Telecommunication Corporation",
  "evolve": "Evolve Broadband",
  "ftc": "FTC Wireless",
  "illinois_valley": "Illinois Valley Cellular",
  "indigo": "Indigo Wireless",
  "infrastructure": "Infrastructure Networks",
  "inland": "Inland Cellular",
  "lexvor": "Lexvor Wireless",
  "limitless": "Limitless Mobile",
  "nemont": "Nemont",
  "nex_tech": "Nex-Tech Wireless",
  "nntc": "NNTC Wireless",
  "northwest": "NorthwestCell",
  "NVC": "NVC",
  "patriot": "Patriot Mobile",
  "pine": "Pine Belt Wireless",
  "pioneer": "Pioneer Cellular",
  "pici": "PTCI",
  "redzone": "Redzone Wireless",
  "rock": "Rock Wireless",
  "rtc": "RTC Communications",
  "silver_star": "Silver Star Communications",
  "snake": "Snake River PCS",
  "southern_linc": "Southern Linc",
  "strata": "STRATA Networks",
  "tampnet": "Tampnet",
  "t-mobile": "T-Mobile US",
  "thumb": "Thumb Cellular",
  "triangle": "Triangle Mobile",
  "union": "Union Wireless",
  "united": "United Wireless",
  "u.s.": "U.S. Cellular",
  "viaero": "Viaero Wireless",
  "vtel": "VTel",
  "west_central": "West Central Wireless",
  "wue": "WUE",
  "pacific": "Northern Pacific Wireless",
  "astac": "ASTAC",
  "at&t": "AT&T Mobility",
  "bristol": "Bristol Bay Cellular Partnership",
  "copper": "Copper Valley Telecom",
  "cordova": "Cordova Wireless",
  "gci": "GCI Wireless",
  "cingular": "NEW CINGULAR WIRELESS",
  "ketchikan": "Ketchikan Public Utilities",
  "otz": "OTZ Cellular",
  "telalaska": "TelAlaska Cellular",
  "verizon": "Verizon Wireless",
  "liberty": "Liberty Puerto Rico",
  "claro": "Claro",
  "viya": "Viya",
  "docomo": "Docomo Pacific",
  "gta": "GTA",
  "it&e": "IT&E",
  "iconnect": "iConnect",
  "bluesky": "Bluesky",
  "astca": "ASTCA"
  }
  const handleClick = async () => {
    setIsLoading(true);
  
    try {
      url = `https://nexuslinksoftwares-a7cc4c050fd6.herokuapp.com/lookup/${value}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const responseee = await response.json();
      const sortedKeys = ["Country", "Company", "Prefix Type", "Specs", "State", "Ratecenter", "Assign Date"];

      // Get all the keys from the original object
      let keys = Object.keys(responseee);
      
      // Create a new object with the keys sorted according to the specified order
      const sortedData = {};
      sortedKeys.forEach(key => {
        if (keys.includes(key)) {
          // If the key is in the original object, add it to the sorted object
          let ckey = responseee[key]
          console.log(ckey)
          console.log(ckey.length)
          if (ckey.length < 1) {
            ckey = "N/A"
          }
          if (ckey === "Rogers Communications Canada I") {
            ckey = "Rogers Communications Canada"
          }
          sortedData[key] = ckey;
          // Remove the key from the list of keys
          keys = keys.filter(k => k !== key);
        }
      });
      
      // Add any remaining keys to the sorted object
      keys.forEach(key => {
        let ckey = responseee[key]
        if (responseee[key].length < 1) {
          ckey = "N/A"
        }
        sortedData[key] = ckey;
      });
      console.log('result is: ', JSON.stringify(sortedData, null, 4));
  
      const resultsEl = document.getElementById('results');

      // Unmount any existing React components from the container
      ReactDOM.unmountComponentAtNode(resultsEl);
      const projects = [
      ]
      // Create an array of ResultComponents
      if (sortedData.Thousands){
        sortedData.Specs = `${sortedData.NPA}, ${sortedData.NXX}, ${sortedData.Thousands}`;
      }
      else  {
        sortedData.Specs = `${sortedData.NPA}, ${sortedData.NXX}, Insignificant Digit`;
      }
      let CompanyIdentified = "N/A"
      const keyzz = Object.keys(replacements)
      keyzz.forEach((keyz) => {
        if (sortedData.Company.toLowerCase().indexOf(keyz) !== -1) {
          console.log("found", replacements[keyz])
          CompanyIdentified = replacements[keyz]
        }
      })
      

      // Delete the original keys
      delete sortedData.NPA;
      delete sortedData.NXX;
      delete sortedData.Thousands;
      console.log(sortedData)
      let projectsFull = Object.keys(sortedData).map((key) => (
        {
          name: key === 'Specs' ? 'NPA, NXX, 1000s' : key,
          description: sortedData[key],
          companyidentified: key === "Company" ? CompanyIdentified : "N/A",
        }
      ));
      
      if (sortedData.Company.toLowerCase().indexOf("phone_lookup_error") !== -1) {
        projectsFull = [{    name: "Error",
        description: "The requested number was not found in our database.",
        companyidentified: "N/A",
      
      }];
      }
      
      console.log("here")
      const resultComponents = <Projects projects={projectsFull} />
      // Add the ResultComponents to the results element
      ReactDOM.render(resultComponents, resultsEl);
      
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='about center'>
      {name && (
        <FadeIn delay="100">
          <h1>
            Advanced <span className='about__name'>Phone Lookup.</span>
          </h1>
        </FadeIn>
      )}
      <FadeIn delay="300">
      <p style={{textAlign:'centre'}} className='about__desc'>Get high level information about any USA/Canadian phone number, from data gathered directly from <span className='about__name'>NANPA</span> & the <span className='about__name'>CNAC</span>. </p>
      </FadeIn>
        <div className='about__contact center'>
        <FadeIn delay="500">
        <PhoneInput
        defaultCountry='US'
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      
      </FadeIn>
        {resume && (
            
            <button  onClick={handleClick} type='button' className='btn btn--outline'>
              lookup
            </button>
          
        )}
      </div>
      {/* Add the results element */}
      <div id="results"> </div>

      <p className='about__desc' style={{fontSize:'200%'}}>Database updated <span className='about__name'>July 1st 2023</span></p>
    </div>
  );
};

export default About;

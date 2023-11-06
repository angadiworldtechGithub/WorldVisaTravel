import React from 'react';
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import { Route,Routes } from "react-router-dom";
import Legalizations from "../Pages/Legalizations/Legalizations";
import Passport from "../Pages/Passport/Passport";
import Visas from "../Pages/Visa";
import VisaRequirements from "../Pages/VisaRequirements";
import Costing from "../Components/Costingtable/Costing";
import NotFoundPage from "../Pages/404";
import Moreinfo from "../Pages/Moreinfo/Moreinfo";
import Businessvisa from "../Pages/Businessvisa/Businessvisa";
import Evisa from "../Pages/Evisa/Evisa";
import Officialvisa from "../Pages/Officialvisa/Officialvisa";
import Tourist from "../Pages/Tourist/Tourist";
import "../App.css";
import Details from '../Components/Details/Details';
import USCitizen from '../Pages/USCitizen/USCitizen';
import NonUsCitizen from '../Pages/NonUsCitizen/NonUsCitizen';
import Canada from '../Components/Canada/Canada';
import Reqdouments from '../Components/Reqdouments/Reqdouments';
import Renew from '../Components/Renew/Renew';
import Replace from "../Components/Replace/Replace";
import Newpassport from "../Components/Newpassport/Newpassport";
import Secondpassport from "../Components/Secondpassport/Secondpassport";
import Reissuance from "../Components/Reissuance/Reissuance";
import Lostpassport from "../Components/Lostpassport/Lostpassport";
import OfficialUsAfghanistan from '../Components/Official_visa/Official_us_visa/Official_Us_Afghanistan';
import OfficialUsUnited_Arab_Emirates from '../Components/Official_visa/Official_us_visa/Official_Us_UnitedArabEmirates';


import OfficialUsArgentina from '../Components/Official_visa/Official_us_visa/Official_Us_Argentina';
import OfficialUsAngola from '../Components/Official_visa/Official_us_visa/Official_Us_Angola';
import OfficialUsArmenia from '../Components/Official_visa/Official_us_visa/Official_Us_Armenia';
import OfficialUsAzerbaijan from '../Components/Official_visa/Official_us_visa/Official_Us_Azerbaijan';
import OfficialUsAlgeria from '../Components/Official_visa/Official_us_visa/Official_Us_Algeria';
import OfficialUsAmericanSamoa from '../Components/Official_visa/Official_us_visa/Official_Us_AmericanSamoa';
import OfficialUsAustralia from '../Components/Official_visa/Official_us_visa/Official_Us_Australia';

import OfficialUsBelarus from '../Components/Official_visa/Official_us_visa/Official_Us_Belarus';

import OfficialUsBrunei from '../Components/Official_visa/Official_us_visa/Official_Us_Brunei';
import OfficialUsBahrain from '../Components/Official_visa/Official_us_visa/Official_Us_Bahrain';

import OfficialUsBulgaria from '../Components/Official_visa/Official_us_visa/Official_Us_Bulgaria';
import OfficialUsBangladesh from '../Components/Official_visa/Official_us_visa/Official_Us_Bangladesh';

import OfficialUsBolivia from '../Components/Official_visa/Official_us_visa/Official_Us_Bolivia';
import OfficialUsBrazil from '../Components/Official_visa/Official_us_visa/Official_Us_Brazil';
import OfficialUsBurkinaFaso from '../Components/Official_visa/Official_us_visa/Official_Us_BurkinaFaso';

import OfficialUsBenin from '../Components/Official_visa/Official_us_visa/Official_Us_Benin';
import OfficialUsBurundi from '../Components/Official_visa/Official_us_visa/Official_Us_Burundi';


function RouterComponent() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/passports" element={<Passport />} />
      <Route path="/legalizations" element={<Legalizations />} />

      <Route path="/costing" element={<Costing />} />
      <Route path="/legalizations" element={<Legalizations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details" element={<Details/>}/>
      <Route path="/Moreinfo" element={<Moreinfo/>}/>
      <Route path="/businessvisa" element={<Businessvisa/>}/>
      {/* visas */}
      <Route path="/visas" element={<Visas />} />
      <Route path="/USCitizen" element={<USCitizen/>}/>
      <Route path="/NonUsCitizen" element={<NonUsCitizen/>}/>
      <Route path="/renew" element={<Renew/>}/>
      <Route path="/reissuance" element={<Reissuance/>}/>
      <Route path="/reqdouments" element={<Reqdouments/>}/>
      <Route path="/replace" element={<Replace />}/>
      <Route path="/newpassport" element={<Newpassport />}/>
      <Route path="/secondpassport" element={<Secondpassport />}/>
      <Route path="/lostpassport" element={<Lostpassport/>}/>
      {/* Destination pages */}
      <Route path="/canada" element={<Canada/>}/>
     
      <Route path="/Afghanistan" element={<OfficialUsAfghanistan/>}/>
      <Route path="/United Arab Emirates" element={<OfficialUsUnited_Arab_Emirates/>}/>
      
      <Route  path = "/Argentina"  element={<OfficialUsArgentina/>}/>
    
      <Route  path = "/Angola"  element={<OfficialUsAngola/>}/>
      <Route  path = "/Armenia"  element={<OfficialUsArmenia/>}/>
      <Route  path = "/Azerbaijan"  element={<OfficialUsAzerbaijan/>}/>
      <Route  path = "/Algeria"  element={<OfficialUsAlgeria/>}/>
      
      <Route  path = "/OfficialUsAmericanSamoa"  element={<OfficialUsAmericanSamoa/>}/>
      
      <Route  path = "/OfficialUsAustralia"  element={<OfficialUsAustralia/>}/>
      
      <Route  path = "/OfficialUsBelarus"  element={<OfficialUsBelarus/>}/>
      
    
      <Route  path = "/OfficialUsBrunei"  element={<OfficialUsBrunei/>}/>
      <Route  path = "/OfficialUsBahrain"  element={<OfficialUsBahrain/>}/>
    
    
      <Route  path = "/OfficialUsBulgaria"  element={<OfficialUsBulgaria/>}/>
      <Route  path = "/OfficialUsBangladesh"  element={<OfficialUsBangladesh/>}/>
    
      <Route  path = "/OfficialUsBolivia"  element={<OfficialUsBolivia/>}/>
      <Route  path = "/OfficialUsBrazil"  element={<OfficialUsBrazil/>}/>
      <Route  path = "/OfficialUsBurkinaFaso"  element={<OfficialUsBurkinaFaso/>}/>
    
      <Route  path = "/OfficialUsBenin"  element={<OfficialUsBenin/>}/>
      
  
      <Route  path = "/OfficialUsBurundi"  element={<OfficialUsBurundi/>}/>
       
      <Route
        path="/visas/:countryId/:visaType"
        element={<VisaRequirements />}
      />
      <Route path="/moreinfo" >

      <Route path="tourist" element={<Tourist/>}/>
      <Route path="Businessvisa" element={<Businessvisa/>}/>
      <Route path="e-visa" element={<Evisa/>}/>
      <Route path="Officialvisa" element={<Officialvisa/>}/>
      

      </Route>

      {/* Other routes can be defined here */}
      <Route path="*" element={<NotFoundPage />} />
   
    </Routes>
    <Footer />
  </div>
    
  );
}

export default RouterComponent;

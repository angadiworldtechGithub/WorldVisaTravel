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
import NotFoundPage from "../Pages/404";
import Businessvisa from "../Pages/Businessvisa/Businessvisa";
import Evisa from "../Pages/Evisa/Evisa";
import Officialvisa from "../Pages/Officialvisa/Officialvisa";
import Tourist from "../Pages/Tourist/Tourist";
import "../App.css";
import USCitizen from '../Pages/USCitizen/USCitizen';
import NonUsCitizen from '../Pages/NonUsCitizen/NonUsCitizen';
import Reqdouments from '../Components/Reqdouments/Reqdouments';
import Renew from '../Components/Renew/Renew';
import Replace from "../Components/Replace/Replace";
import Newpassport from "../Components/Newpassport/Newpassport";
import Secondpassport from "../Components/Secondpassport/Secondpassport";
import Reissuance from "../Components/Reissuance/Reissuance";
import Lostpassport from "../Components/Lostpassport/Lostpassport";
import Tourist_Evisa from '../Pages/Tourist_Evisa/Tourist_Evisa';
import Business_Evisa from '../Pages/Business_Evisa/Business_Evisa';
import UsCitizenE_Visa from '../Pages/USCitizen/UsCitizenE_Visa/UsCitizenE_Visa';
import NonUsCitizenE_Visa from '../Pages/NonUsCitizen/NonUsCitizenE_Visa/NonUsCitizenE_Visa';
import Business_Sample from '../Components/Business_Sample/Business_Sample';


function RouterComponent() {
  return (
    <div>
    <Navbar/>
    <Routes>

  {/* Main Routes */}
  
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/passports" element={<Passport />} />
      <Route path="/legalizations" element={<Legalizations />} />
      <Route path="/visas" element={<Visas />} />
      <Route path="/contact" element={<Contact />} />

{/* 4 types of visas */}

      <Route path="/:id/tourist-visa" element={<Tourist/>}/>
      <Route path="/:id/business-visa" element={<Businessvisa/>}/>
      <Route path="/:id/e-visa" element={<Evisa/>}/>
      <Route path="/:id/Official-visa" element={<Officialvisa/>}/>

     {/* <Route path="/costing" element={<Costing />} />     
         <Route path="/details" element={<Details/>}/>
     */}
     <Route path="/:id/:id/Tourist_e-visa" element={<Tourist_Evisa/>}/>
     <Route path="/:id/:id/Business_e-visa" element={<Business_Evisa/>}/>

      <Route path="/:id/:id/:type/USCitizen" element={<USCitizen/>}/>
      <Route path="/:id/:id/:type/NonUsCitizen" element={<NonUsCitizen/>}/>

      <Route path="/:id/:id/:id/:type/USCitizen" element={<UsCitizenE_Visa/>}/>
      <Route path="/:id/:id/:id/:type/NonUSCitizen" element={<NonUsCitizenE_Visa/>}/>


      <Route path="/:id/renew" element={<Renew/>}/>
      <Route path="/:id/reissuance" element={<Reissuance/>}/>
      <Route path="/:id/reqdouments" element={<Reqdouments/>}/>
      <Route path="/:id/replace" element={<Replace />}/>
      <Route path="/:id/newpassport" element={<Newpassport />}/>
      <Route path="/:id/secondpassport" element={<Secondpassport />}/>
      <Route path="/:id/lostpassport" element={<Lostpassport/>}/>

      <Route
        path="/business_sample"
        element={<Business_Sample />}
      />
      
      <Route
        path="/visas/:countryId/:visaType"
        element={<VisaRequirements />}
      />
      {/* Other routes can be defined here */}
      <Route path="*" element={<NotFoundPage />} />
   
    </Routes>
    <Footer />
  </div>
    
  );
}

export default RouterComponent;
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
// import Moreinfo from "../Pages/Moreinfo/Moreinfo";
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
import Afghanistan from '../Components/Tourist_visa/Tourist_non_us_visa/Afghanistan';
import BelarusTouristNonUs from '../Components/Tourist_visa/Tourist_non_us_visa/BelarusTouristNonUs';
import Tourist_nonUs_Belize from '../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Belize';
import Tourist_nonUs_Brunei from '../Components/Tourist_visa/Tourist_non_us_visa/Tourist_nonUs_Brunei';

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


      <Route path="/costing" element={<Costing />} />
      
      
      <Route path="/details" element={<Details/>}/>
     

      <Route path="/:type/USCitizen" element={<USCitizen/>}/>
      <Route path="/:id/:id/:type/NonUsCitizen" element={<NonUsCitizen/>}/>

      <Route path="/renew" element={<Renew/>}/>
      <Route path="/reissuance" element={<Reissuance/>}/>
      <Route path="/reqdouments" element={<Reqdouments/>}/>
      <Route path="/replace" element={<Replace />}/>
      <Route path="/newpassport" element={<Newpassport />}/>
      <Route path="/secondpassport" element={<Secondpassport />}/>
      <Route path="/lostpassport" element={<Lostpassport/>}/>
      {/* Destination pages */}
      <Route path="/canada" element={<Canada/>}/>
      <Route path="/afghanistan" element={<Afghanistan/>}/>
      <Route path="/belarus" element={<BelarusTouristNonUs/>}/>
      <Route path="/belize" element={<Tourist_nonUs_Belize/>}/>
      <Route path='/brunei' element={<Tourist_nonUs_Brunei/>}/>
      
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

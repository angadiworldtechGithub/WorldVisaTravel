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


function RouterComponent() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/canada" element={<Canada/>}/>
      <Route path="/renew" element={<Renew/>}/>
      <Route path="/reissuance" element={<Reissuance/>}/>
      <Route path="/reqdouments" element={<Reqdouments/>}/>
      <Route path="/replace" element={<Replace />}/>
      <Route path="/newpassport" element={<Newpassport />}/>
      <Route path="/secondpassport" element={<Secondpassport />}/>
      <Route path="/lostpassport" element={<Lostpassport/>}/>
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

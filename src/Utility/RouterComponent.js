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
import Afghanistan from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Afghanistan';
import Azerbaijan from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Azerbaijan';
import Australia from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Australia';
import Belarus from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Belarus';
import Brazil from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Brazil';
import Bahrain from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Bahrain';
import Bangladesh from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Bangladesh';
import Benin from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Benin';
import Bolivia from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Bolivia';
import BurkinaFaso from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_BurkinaFaso';
import Burundi from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Burundi';
import Djibouti from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Djibouti';
import Eritrea from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Eritrea';
import Ethiopia from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Ethiopia';
import Gabon from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Gabon';
import Ghana from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Ghana';
import Guinea from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Guinea';
import Gambia from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Gambia';
import Indonesia from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Indonesia';
import India from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_India';
import Iran from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Iran';
import Iraq from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Iraq';
import Jamaica from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Jamaica';
import Jordan from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Jordan';
import Kenya from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Kenya';
import Cambodia from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Cambodia';
import Kazakhstan from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Kazakhstan';
import Laos from '../Components/Business_visa/Business_visa_official/Business_Official_Visa_Laos';

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
      <Route path="/afghanistan" element={<Afghanistan/>}/>  
      <Route path="/azerbaijan" element={<Azerbaijan/>}/>  
      <Route path="/australia" element={<Australia/>}/>  
      <Route path="/belarus" element={<Belarus/>}/>  
      <Route path="/brazil" element={<Brazil/>}/>  
      <Route path="/bahrain" element={<Bahrain/>}/>  
      <Route path="/bangladesh" element={<Bangladesh/>}/>  
      <Route path="/benin" element={<Benin/>}/> 
      <Route path="/bolivia" element={<Bolivia/>}/>  
      <Route path="/burkinafaso" element={<BurkinaFaso/>}/>  
      <Route path="/burundi" element={<Burundi/>}/>  
      <Route path="/djibouti" element={<Djibouti/>}/>  
      <Route path="/eritrea" element={<Eritrea/>}/>  
      <Route path="/ethiopia" element={<Ethiopia/>}/>  
      <Route path="/gabon" element={<Gabon/>}/>  
      <Route path="/ghana" element={<Ghana/>}/>  
      <Route path="/ghana" element={<Ghana/>}/>        
      <Route path="/guinea" element={<Guinea/>}/>  
      <Route path="/gambia" element={<Gambia/>}/> 
      <Route path="/indonesia" element={<Indonesia/>}/> 
      <Route path="/india" element={<India/>}/> 
      <Route path="/iran" element={<Iran/>}/> 
      <Route path="/iraq" element={<Iraq/>}/> 
      <Route path="/jamaica" element={<Jamaica/>}/> 
      <Route path="/jordan" element={<Jordan/>}/> 
      <Route path="/kenya" element={<Kenya/>}/> 
      <Route path="/cambodia" element={<Cambodia/>}/> 
      <Route path="/kazakhstan" element={<Kazakhstan/>}/> 
      <Route path="/laos" element={<Laos/>}/> 












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

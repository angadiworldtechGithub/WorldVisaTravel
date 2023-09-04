import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Legalizations from "./Pages/Legalizations/Legalizations";
import Passport from "./Pages/Passport/Passport";
import Reqdouments from "./Components/Reqdouments/Reqdouments";
import Renew from "./Components/Renew/Renew";
import Visas from "./Pages/Visa";
import VisaRequirements from "./Pages/VisaRequirements";
import Costing from "./Components/Costingtable/Costing";
import Replace from "./Components/Replace/Replace";
import Newpassport from "./Components/Newpassport/Newpassport";
import Reissuance from "./Components/Reissuance/Reissuance";
import Lostpassport from "./Components/Lostpassport/Lostpassport";
import PassportServiceType from "./Pages/PassportServiceType";
import NotFoundPage from "./Pages/404";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/passports" element={<Passport />} />
          <Route
            path="/passports/:serviceType"
            element={<PassportServiceType />}
          />
          <Route path="/legalizations" element={<Legalizations />} />
          <Route path="/costing" element={<Costing />} />
          <Route path="/legalizations" element={<Legalizations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/renew" element={<Renew />} />
          <Route path="/replace" element={<Replace />} />
          <Route path="/newpassport" element={<Newpassport />} />
          <Route path="/reissuance" element={<Reissuance />} />
          <Route path="/lostpassport" element={<Lostpassport />} />
          {/* visas */}
          <Route path="/visas" element={<Visas />} />
          <Route
            path="/visas/:countryId/:visaType"
            element={<VisaRequirements />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

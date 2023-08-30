import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Feedback from "./Pages/Feedback/Feedback.js";
import { Routes, Route } from "react-router-dom";
import Legalizations from "./Pages/Legalizations/Legalizations";
import Passport from "./Pages/Passport/Passport";
import Reqdouments from "./Components/Reqdouments/Reqdouments";
import Visas from "./Pages/Visa";
import VisaRequirements from "./Pages/VisaRequirements";

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
          <Route path="/passports/:serviceType" element={<Reqdouments />} />
          <Route path="/legalizations" element={<Legalizations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* visas */}
          <Route path="/visas" element={<Visas />} />
          <Route
            path="/visas/:countryId/:visaType"
            element={<VisaRequirements />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

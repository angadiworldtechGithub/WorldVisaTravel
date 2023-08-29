import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Feedback from "./Pages/Feedback.js";
import { Routes, Route } from "react-router-dom";
import Legalizations from "./Pages/Legalizations/Legalizations";
import Passport from "./Pages/Passport/Passport";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/passport" element={<Passport/>}/>
          <Route path="/legalizations" element={<Legalizations/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;

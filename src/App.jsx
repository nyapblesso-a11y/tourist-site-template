import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./HomePage/Home";
import AboutUs from "./AboutUsPAge/AboutUs";
import Package from "./PackagePage/Package";
import Gallery from "./GalleryPage/Gallery";
import ContactUs from "./ContactUsPage/ContactUs";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
    {/* <Navigation/> */}
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about_us" element={<AboutUs/>} />
          <Route path="/packages" element={<Package/>} />
          <Route  path="/gallery" element= {<Gallery/>}/>
          <Route  path="/contact_us" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

// Importing Layouts
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Homepage from "./Components/Layouts/Homepage";
import NotFound from "./Components/Layouts/NotFound";

// Importing Components
import Services from "./Components/Services";
import Installations from "./Components/Installations";
import Products from "./Components/store/Product";
import ContactUs from "./Components/ContactUs";

// Importing Registerations
import Login from "./Components/registerations/Login";
import Register from "./Components/registerations/Register";

// Importing Tools
import GoToTop from "./Components/GoToTop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/installations" element={<Installations />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;

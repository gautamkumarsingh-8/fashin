import { Catalogue } from "./pages/Catalogue";
import Fashion from "./pages/Fashion";
import Favourit from "./pages/Favourit";
import { Lifystyle } from "./pages/Lifystyle";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Girlcard from "./components/Girlcard";
import Young from "./components/Young";
import Playstore from "./components/Playstore";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
        <Company />
        <Girlcard />
        <Young />
        <Playstore />
        <Contact/>
        <Footer/>
        <Routes>
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="lifestyle" element={<Lifystyle />} />
          <Route path="favourite" element={<Favourit />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

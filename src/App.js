import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Band from "./pages/Band";
import Premium from "./pages/Premium";
import Tape from "./pages/Tape";
import Gauze from "./pages/Gauze";
import Wound from "./pages/Wound";
import News from "./pages/News";
import Paris from "./pages/Paris";
import Glown from "./pages/Glown";
import Blood from "./pages/Blood";
import Breath from "./pages/Breath";
import Dental from "./pages/Dental";
import Drain from "./pages/Drain";
import Glove from "./pages/Glove";
import Infusion from "./pages/Infusion";
import Sphy from "./pages/Sphy";
import Blade from "./pages/Blade";
import Device from "./pages/Device";
import Dressing from "./pages/Dressing";
import Needle from "./pages/Needle";
import Thermo from "./pages/Thermo";
import Profile from "./pages/Profile";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Premium" element={<Premium />} />
          <Route path="Band" element={<Band />} />
          <Route path="Tape" element={<Tape />} />
          <Route path="Gauze" element={<Gauze />} />
          <Route path="Wound" element={<Wound />} />
          <Route path="News" element={<News />} />
          <Route path="Paris" element={<Paris />} />
          <Route path="Glown" element={<Glown />} />
          <Route path="Blood" element={<Blood />} />
          <Route path="Breath" element={<Breath />} />
          <Route path="Dental" element={<Dental />} />
          <Route path="Drain" element={<Drain />} />
          <Route path="Glove" element={<Glove />} />
          <Route path="Infusion" element={<Infusion />} />
          <Route path="Sphy" element={<Sphy />} />
          <Route path="Blade" element={<Blade />} />
          <Route path="Device" element={<Device />} />
          <Route path="Dressing" element={<Dressing />} />
          <Route path="Needle" element={<Needle />} />
          <Route path="Thermo" element={<Thermo />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


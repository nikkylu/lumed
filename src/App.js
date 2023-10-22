import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Band from "./pages/Band";
import Premium from "./pages/Premium";
import Tape from "./pages/Tape";
import Gauze from "./pages/Gauze";
import Wound from "./pages/Wound";
// import NewYork from "./pages/NewYork";
// import Photo from "./pages/Photo";
// import Iphone from "./pages/Iphone";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Premium" element={<Premium />} />
          <Route path="Band" element={<Band />} />
          <Route path="Tape" element={<Tape />} />
          <Route path="Gauze" element={<Gauze />} />
          <Route path="Wound" element={<Wound />} />
          {/* <Route path="und" element={<Und />} />
          <Route path="newyork" element={<NewYork />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
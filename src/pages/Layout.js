import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import logo from "/Users/nikkylu/lumed/src/sources/logo.png"
import logot from "/Users/nikkylu/lumed/src/sources/logo-t.png"

const Layout = () => {
  return (
    <div className="Layout">
      <div>
        <div>
          <div className="Layout-bar">
            <img src={logo} className='Layout-img'></img>
            <img src={logot} className='Layout-img'></img>
            <div className='margin-2'>Lumed Medical Dressings and Devices</div>
            <Link to="/" className="Layout-sidebar">Product Overview</Link>
            <Link to="/Profile" className="Layout-sidebar">Contact</Link>
            <Link to="/News" className="Layout-sidebar">News</Link>
            
            {/* <Link to="/Premium" className="Layout-sidebar">New Premium Quality Recommended</Link>
            <Link to="/Band" className="Layout-sidebar">Elastic Bandages</Link>
            <Link to="/Tape" className="Layout-sidebar">Adhesive Tape</Link>
            <Link to="/Gauze" className="Layout-sidebar">Cotton & Gauze</Link>
            <Link to="/Wound" className="Layout-sidebar">Wound Dressings</Link> */}
          </div>
          <Link to="/" className="Layout-button">Back</Link>
          
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;
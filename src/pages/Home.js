import './Home.css'
import a from "/Users/nikkylu/lumed/src/pages/components/pic/Adhesive Tapes.jpeg";
import b from "/Users/nikkylu/lumed/src/pages/components/pic/Blood Collection & Transfusion & Filterings.jpeg";
import c from "/Users/nikkylu/lumed/src/pages/components/pic/Cotton & Gauze.jpeg";
import d from "/Users/nikkylu/lumed/src/pages/components/pic/Drainage Bags Tubes & Irrigation Set.jpeg";
import e from "/Users/nikkylu/lumed/src/pages/components/pic/Elastic Bandages.jpeg";
import f from "/Users/nikkylu/lumed/src/pages/components/pic/Endo-Tube & TT-Tube Suction Tube Breathing Circuits Masks.jpeg";
import g from "/Users/nikkylu/lumed/src/pages/components/pic/Infusions.jpeg";
import h from "/Users/nikkylu/lumed/src/pages/components/pic/Latex:Nitrile Surgical Gloves & Condoms.jpeg";
import i from "/Users/nikkylu/lumed/src/pages/components/pic/Mercury-Free Oval Thermometers Digital Thermometers.jpeg";
import j from "/Users/nikkylu/lumed/src/pages/components/pic/New Premium Quality Recommended.jpeg";
import k from "/Users/nikkylu/lumed/src/pages/components/pic/Plaster Of Paris Bandages Synthetic Casting Bandages Orthopaedic Paddings.jpeg";
import l from "/Users/nikkylu/lumed/src/pages/components/pic/Sphygmomanometer Stethoscope & Tourniquet Tougue Depressor & ID-Band.jpeg";
import m from "/Users/nikkylu/lumed/src/pages/components/pic/Surgical : Isolation Gowns & Face Masks etc..jpeg";
import n from "/Users/nikkylu/lumed/src/pages/components/pic/Surgical Blades Scalpels & Sutures Sterilization Swabs etc..jpeg";
import o from "/Users/nikkylu/lumed/src/pages/components/pic/Syringes & Needles.jpeg";
import p from "/Users/nikkylu/lumed/src/pages/components/pic/Various Dental Products & Kits.jpeg";
import q from "/Users/nikkylu/lumed/src/pages/components/pic/Various Surgical Device Kits.jpeg";
import r from "/Users/nikkylu/lumed/src/pages/components/pic/Various Surgical Dressing Device Kits.jpeg";
import s from "/Users/nikkylu/lumed/src/pages/components/pic/Various Wound Dressings.jpeg";


import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div>Product Overview</div>
      <div className='Home-div'>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={j} />
            <Link to="/Premium" className="Home-d">New Premium Quality Recommended</Link>
          </div>
          <div className="Home-pic">
            <img src={o} />
            <Link to="/Needle" className="Home-d">Syringes & Needles</Link>
          </div>
          <div className="Home-pic">
            <img src={g} />
            <Link to="/Infusion" className="Home-d">Infusions</Link>
          </div>
          <div className="Home-pic">
            <img src={b} />
            <Link to="/Blood" className="Home-d">Blood Collection & Transfusion & Filterings</Link>
          </div>
       
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={d} />
            <Link to="/Drain" className="Home-d">Drainage Bags Tubes & Irrigation Set</Link>
          </div>
           <div className="Home-pic">
            <img src={i} />
            <Link to="/Thermo" className="Home-d">Mercury-Free Oval Thermometers Digital Thermometers</Link>
          </div>
          <div className="Home-pic">
            <img src={l} />
            <Link to="/Sphy" className="Home-d">Sphygmomanometer Stethoscope & Tourniquet Tougue Depressor & ID-Band</Link>
          </div>
          <div className="Home-pic">
            <img src={h} />
            <Link to="/Glove" className="Home-d">Latex/Nitrile Surgical Gloves & Condoms</Link>
          </div>
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={n} />
            <Link to="/Blade" className="Home-d">Surgical Blades Scalpels & Sutures Sterilization Swabs etc.</Link>
          </div>
          <div className="Home-pic">
            <img src={q} />
            <Link to="/Device" className="Home-d">Various Surgical Device Kits</Link>
          </div>
          <div className="Home-pic">
            <img src={r} />
            <Link to="/Dressing" className="Home-d">Various Surgical Dressing Device Kits</Link>
          </div>
          <div className="Home-pic">
            <img src={p} />
            <Link to="/Dental" className="Home-d">Various Dental Products & Kits</Link>
          </div>
          
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={f} />
            <Link to="/Breath" className="Home-d">Endo-Tube & TT-Tube Suction Tube Breathing Circuits Masks</Link>
          </div>
          <div className="Home-pic">
            <img src={c} />
            <Link to="/Gauze" className="Home-d">Cotton & Gauze</Link>
          </div>
          <div className="Home-pic">
            <img src={k} />
            <Link to="/Paris" className="Home-d">Plaster Of Paris Bandages Synthetic Casting Bandages Orthopaedic Paddings</Link>
          </div>
          <div className="Home-pic">
            <img src={e} />
            <Link to="/Band" className="Home-d">Elastic Bandages</Link>
          </div>
        </div>



        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={s} />
            <Link to="/Wound" className="Home-d">Various Wound Dressings</Link>
          </div>     
          <div className="Home-pic">
            <img src={a} />
            <Link to="/Tape" className="Home-d">Adhesive Tapes</Link>
          </div>
          <div className="Home-pic">
            <img src={m} />
            <Link to="/Glown" className="Home-d">Surgical: Isolation Gowns & Face Masks etc.</Link>
          </div>
        </div>


      </div>
    </div>
  )
};

export default Home;

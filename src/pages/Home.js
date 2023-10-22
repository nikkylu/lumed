import './Home.css'
import a from "/Users/nikkylu/lumed/src/pages/components/pic/Adhesive Tapes.jpg";
import b from "/Users/nikkylu/lumed/src/pages/components/pic/Blood Collection & Transfusion & Filterings.jpg";
import c from "/Users/nikkylu/lumed/src/pages/components/pic/Cotton & Gauze.jpg";
import d from "/Users/nikkylu/lumed/src/pages/components/pic/Drainage Bags Tubes & Irrigation Set.jpg";
import e from "/Users/nikkylu/lumed/src/pages/components/pic/Elastic Bandages.jpg";
import f from "/Users/nikkylu/lumed/src/pages/components/pic/Endo-Tube & TT-Tube Suction Tube Breathing Circuits Masks.jpg";
import g from "/Users/nikkylu/lumed/src/pages/components/pic/Infusions.jpg";
import h from "/Users/nikkylu/lumed/src/pages/components/pic/Latex:Nitrile Surgical Gloves & Condoms.jpg";
import i from "/Users/nikkylu/lumed/src/pages/components/pic/Mercury-Free Oval Thermometers Digital Thermometers.jpg";
import j from "/Users/nikkylu/lumed/src/pages/components/pic/New Premium Quality Recommended.jpg";
import k from "/Users/nikkylu/lumed/src/pages/components/pic/Plaster Of Paris Bandages Synthetic Casting Bandages Orthopaedic Paddings.jpg";
import l from "/Users/nikkylu/lumed/src/pages/components/pic/Sphygmomanometer Stethoscope & Tourniquet Tougue Depressor & ID-Band.jpg";
import m from "/Users/nikkylu/lumed/src/pages/components/pic/Surgical : Isolation Gowns & Face Masks etc..jpg";
import n from "/Users/nikkylu/lumed/src/pages/components/pic/Surgical Blades Scalpels & Sutures Sterilization Swabs etc..jpg";
import o from "/Users/nikkylu/lumed/src/pages/components/pic/Syringes & Needles.jpg";
import p from "/Users/nikkylu/lumed/src/pages/components/pic/Various Dental Products & Kits.jpg";
import q from "/Users/nikkylu/lumed/src/pages/components/pic/Various Surgical Device Kits.jpg";
import r from "/Users/nikkylu/lumed/src/pages/components/pic/Various Surgical Dressing Device Kits.jpg";
import s from "/Users/nikkylu/lumed/src/pages/components/pic/Various Wound Dressings.jpg.jpg";

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
            <img src={a} />
            <Link to="/Tape" className="Home-d">Adhesive Tapes</Link>
          </div>
          <div className="Home-pic">
            <img src={b} />
            <Link to="/Blood-Collection" className="Home-d">Blood Collection & Transfusion & Filterings</Link>
          </div>
          <div className="Home-pic">
            <img src={c} />
            <Link to="/Gauze" className="Home-d">Cotton & Gauze</Link>
          </div>
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={d} />
            <Link to="/Drainage-Bags" className="Home-d">Drainage Bags Tubes & Irrigation Set</Link>
          </div>
          <div className="Home-pic">
            <img src={e} />
            <Link to="/Band" className="Home-d">Elastic Bandages</Link>
          </div>
          <div className="Home-pic">
            <img src={f} />
            <Link to="/Endo-Tube" className="Home-d">Endo-Tube & TT-Tube Suction Tube Breathing Circuits Masks</Link>
          </div>
          <div className="Home-pic">
            <img src={g} />
            <Link to="/Infusions" className="Home-d">Infusions</Link>
          </div>
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={h} />
            <Link to="/Surgical-Gloves" className="Home-d">Latex/Nitrile Surgical Gloves & Condoms</Link>
          </div>
          <div className="Home-pic">
            <img src={i} />
            <Link to="/Thermometers" className="Home-d">Mercury-Free Oval Thermometers Digital Thermometers</Link>
          </div>
          <div className="Home-pic">
            <img src={k} />
            <Link to="/Plaster-Bandages" className="Home-d">Plaster Of Paris Bandages Synthetic Casting Bandages Orthopaedic Paddings</Link>
          </div>
          <div className="Home-pic">
            <img src={l} />
            <Link to="/Sphygmomanometer" className="Home-d">Sphygmomanometer Stethoscope & Tourniquet Tougue Depressor & ID-Band</Link>
          </div>
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={m} />
            <Link to="/Isolation-Gowns" className="Home-d">Surgical: Isolation Gowns & Face Masks etc.</Link>
          </div>
          <div className="Home-pic">
            <img src={n} />
            <Link to="/Surgical-Blades" className="Home-d">Surgical Blades Scalpels & Sutures Sterilization Swabs etc.</Link>
          </div>
          <div className="Home-pic">
            <img src={o} />
            <Link to="/Syringes" className="Home-d">Syringes & Needles</Link>
          </div>
          <div className="Home-pic">
            <img src={p} />
            <Link to="/Dental-Products" className="Home-d">Various Dental Products & Kits</Link>
          </div>
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <img src={q} />
            <Link to="/Surgical-Device-Kits" className="Home-d">Various Surgical Device Kits</Link>
          </div>
          <div className="Home-pic">
            <img src={r} />
            <Link to="/Surgical-Dressing-Device-Kits" className="Home-d">Various Surgical Dressing Device Kits</Link>
          </div>
          <div className="Home-pic">
            <img src={s} />
            <Link to="/Wound" className="Home-d">Various Wound Dressings</Link>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Home;

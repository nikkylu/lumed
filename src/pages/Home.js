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
import t from "/Users/nikkylu/lumed/src/pages/components/pic/Other.png";
import grey from "/Users/nikkylu/lumed/src/pages/components/pic/grey.jpg";


import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div>Product Overview</div>
      <div className='Home-div'>

        <div className="Home-Photo">
          <div className="Home-pic">
            <Link to="/Premium">
              <img src={j} alt="New Premium Quality Recommended" />
              <div className="Home-d">New Premium Quality Recommended</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Needle">
              <img src={o} alt="Syringes & Needles" />
              <div className="Home-d">Syringes & Needles</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Infusion">
              <img src={g} alt="Infusions" />
              <div className="Home-d">Infusions</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Blood">
              <img src={b} alt="Blood Collection & Transfusion & Filtering" />
              <div className="Home-d">Blood Collection & Transfusion & Filterings</div>
            </Link>
          </div>
        </div>
        
        <div className="Home-Photo">
          <div className="Home-pic">
            <Link to="/Drain">
              <img src={d} alt="Drainage Bags Tubes & Irrigation Set" />
              <div className="Home-d">Drainage Bags, Tubes & Irrigation Set</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Thermo">
              <img src={i} alt="Mercury-Free Oval Thermometers Digital Thermometers" />
              <div className="Home-d">Mercury-Free Oval Thermometers, Digital Thermometers</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Sphy">
              <img src={l} alt="Sphygmomanometer Stethoscope & Tourniquet Tougue Depressor & ID-Band" />
              <div className="Home-d">Sphygmomanometer Stethoscope, Tourniquet Tougue Depressor, ID-Band</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Glove">
              <img src={h} alt="Latex/Nitrile Surgical Gloves & Condoms" />
              <div className="Home-d">Latex/Nitrile Surgical Gloves, Condoms</div>
            </Link>
          </div>
        </div>

        <div className="Home-Photo">
          <div className="Home-pic">
            <Link to="/Blade">
              <img src={n} alt="Surgical Blades Scalpels & Sutures Sterilization Swabs etc." />
              <div className="Home-d">Surgical Blades, Scalpels, Sutures, Sterilization Swabs etc.</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Dressing">
              <img src={q} alt="Various Surgical Device Kits" />
              <div className="Home-d">Various Surgical Dressing & Device Kits, Various Dental Products & Kits</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Breath">
              <img src={f} alt="Endo-Tube & TT-Tube Suction Tube Breathing Circuits Masks" />
              <div className="Home-d">Breathing Circuits & Masks, Endo-Tube, TT-Tube, Suction Tube</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Gauze">
              <img src={c} alt="Cotton & Gauze" />
              <div className="Home-d">Cotton & Gauze</div>
            </Link>
          </div>
        </div>

        <div className="Home-Photo">
          
          <div className="Home-pic">
            <Link to="/Paris">
              <img src={k} alt="Plaster Of Paris Bandages Synthetic Casting Bandages Orthopaedic Paddings" />
              <div className="Home-d">Plaster Of Paris Bandages, Synthetic Casting Bandages, Orthopaedic Paddings</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Band">
              <img src={e} alt="Elastic Bandages" />
              <div className="Home-d">Elastic Bandages</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Wound">
              <img src={s} alt="Various Wound Dressings" />
              <div className="Home-d">Various Wound Dressings</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Tape">
              <img src={a} alt="Adhesive Tapes" />
              <div className="Home-d">Adhesive Tapes</div>
            </Link>
          </div>
        </div>

        <div className="Home-Photo">
    
          <div className="Home-pic">
            <Link to="/Glown">
              <img src={m} alt="Surgical: Isolation Gowns & Face Masks etc." />
              <div className="Home-d">Surgical/Isolation Gowns, Face Masks etc.</div>
            </Link>
          </div>
          <div className="Home-pic">
            <Link to="/Other">
              <img src={t} alt="Other Products" />
              <div className="Home-d">Other Products</div>
            </Link>
          </div>
          <div className="Home-pic">
            <img src={grey} alt="Other Products" />
            <div className="Home-holder"></div>
          </div>
          <div className="Home-pic">
            <img src={grey} alt="Other Products" />
            <div className="Home-holder"></div>
          </div>

        </div>

      </div>
    </div>
  )
};

export default Home;



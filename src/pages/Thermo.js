import image1 from "/Users/nikkylu/lumed/src/pages/components/thermo.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/thermo.fld/image002.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/thermo.fld/image003.jpg";
import image4 from "/Users/nikkylu/lumed/src/pages/components/thermo.fld/image004.jpg";

import "./Home.css"

const Thermo = () => {
  return (
<div className="Home">
    <div>Mercury-Free Oval Thermometers, Digital Thermometers</div>
   <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Mercury-Free Oval Thermometers, ISO12470-1</div>
        <p>Big type, C-scale or C&F-scale, premium quality</p>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Digital Ear Thermometer, DIN EN 12470-3, CE</div>
        <p>C-scale or C&F-scale</p>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Digital Forehead Thermometer, CE</div>
        <p>C-scale or C & F – scale</p>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Digital Thermometers, DIN EN 12470-3, CE</div>
        <p>C-scale or C&F – scale, water-resistant or non-water resistant, hard probe or flexible probe, various types.</p>
    </div>
</div>

        </div>
   
  )
}

export default Thermo;
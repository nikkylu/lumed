import image1 from "/Users/nikkylu/lumed/src/pages/components/glown/image047.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/glown/image048.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/glown/image049.png";
import image4 from "/Users/nikkylu/lumed/src/pages/components/glown/image050.jpg";
import image5 from "/Users/nikkylu/lumed/src/pages/components/glown/image051.jpg";
import image6 from "/Users/nikkylu/lumed/src/pages/components/glown/image052.jpg";

import "./Home.css"

const Glown = () => {
  return (
<div className="Home">
    <div>Surgical/Isolation Gowns, Face Masks etc.</div>
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Non-Woven Surgical Gown, CE</div>
        <div>size: S/M/L/XL/XXL</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Non-Woven Isolation Gown, CE</div>
        <div>size: S/M/L/XL/XXL</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Non-Woven Face Mask, BFE≥99%, 3-ply</div>
        <div>with 2 ear loops or with 4 ties, size: 17.5cmx9.5cm (open size: 17.5cmx17.5cm)</div>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>KN95 Face Mask,</div>
        <div>Non-woven fabric, size:10.5 x 16.5cm</div>
    </div>
</div>

<div className="Home-con">
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>Paper Face Mask, 2-ply</div>
    </div>
</div>

<div className="Home-con">
    <img src={image6} className="Home-sp"/>
    <div className="Home-s">
        <div>Emergency Blanket</div>
    </div>
</div>



        </div>
   
  )
}

export default Glown;
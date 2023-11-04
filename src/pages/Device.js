import image1 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image002.png";
import image3 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image003.png";
import image4 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image004.png";
import image5 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image005.png";
import image6 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image006.jpg";
import image7 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image007.jpg";
import image8 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image008.jpg";
import image9 from "/Users/nikkylu/lumed/src/pages/components/devicekit.fld/image009.jpg";

import "./Home.css"

const Device = () => {
  return (
<div className="Home">
  <div>Various Surgical Device Kits</div>
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Epidural Anaesthesia Kit</div>
        <p>sterile, ISO7886-1993, CE</p>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Epidural & Spinal Anaesthesia Kit</div>
        <p>sterile, CE</p>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Central Venous Catheter Kit</div>
        <p>sterile, CE</p>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Drainage Catheters and Accessories</div>
        <p>(Disposable Pleural Catheter Kit), sterile, CE</p>
    </div>
</div>

<div className="Home-con">
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Blood Lines(Tubes)</div>
        <p>sterile, CE</p>
    </div>
</div>

<div className="Home-con">
    <div className="Home-s">
        <div>Disposable Y Introducer Needles</div>
    </div>
</div>
<div className="Home-con">
    <div className="Home-s">
        <div>Disposable Abdomen Drainage Catheter</div>
    </div>
</div><div className="Home-con">
    <div className="Home-s">
        <div>Disposable Breathing Circuits (or Anaesthesia Circuits)</div>
    </div>
</div><div className="Home-con">
    <div className="Home-s">
        <div>Disposable Nasal Oxygen Tubes</div>
    </div>
</div><div className="Home-con">
    <div className="Home-s">
        <div>Disposable Haemodialysers</div>
    </div>
</div>
<div className="Home-con">
    <div className="Home-s">
        <div>Disposable Guidewires</div>
    </div>
</div>
<div className="Home-con">
    <div className="Home-s">
        <div>Disposable Dilatros</div>
    </div>
</div>
<div className="Home-con">
    <div className="Home-s">
        <div>Arterial Catheter</div>
        <div>Introducer Sheath Kit</div>
        <div>Hemodialyzer</div>
    </div>
</div>

        </div>
   
  )
}

export default Device;
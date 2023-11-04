import image1 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image002.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image003.jpg";
import image4 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image004.jpg";
import image5 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image005.jpg";
import image6 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image006.jpg";
import image7 from "/Users/nikkylu/lumed/src/pages/components/infusoin.fld/image007.jpg";
import "./Home.css"

const Infusion = () => {
  return (
<div className="Home">
    <div>Infusions</div>
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Infusion Set, sterile, ISO 8536/4, CE</div>
        <div>for use with gravity, latex-free, with or without DEHP,</div>
        <div>various types.</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Infusion Set, sterile, ISO 8536/8,</div>
        <div>for use with infusion pumps, latex-free, with</div>
        <div>or without DEHP, various types.</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Burette Infusion set, sterile, ISO 8536-5:2004, CE</div>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Scalp Vein Set, sterile, ISO 8536/4, CE</div>
        <div>usual or safety type, 18G-27G, luer or luer lock</div>
    </div>
</div>

<div className="Home-con">
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>I.V.Cannula, sterile, ISO 7864, ISO 10555-5, CE</div>
        <div>14G-24G</div>
        <div>with or without injection port, with or without wing</div>
    </div>
</div>

<div className="Home-con">
    <img src={image6} className="Home-sp"/>
    <div className="Home-s">
        <div>Fixation Dressing for I.V.Cannula, sterile, CE</div>
        <div>Size: 6cm x 8cm, non-woven or transparent film,</div>
        <div>with wound pad</div>
    </div>
</div>

<div className="Home-con">
    <img src={image7} className="Home-sp"/>
    <div className="Home-s">
        <div>3-Way Stopcock, sterile, CE</div>
    </div>
</div>


        </div>
   
  )
}

export default Infusion;
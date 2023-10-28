import image1 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image001.png";
import image2 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image002.png";
import image3 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image003.png";
import image4 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image004.jpg";
import image5 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image005.jpg";
import image6 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image006.jpg";
import image7 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image007.jpg";
import image8 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image008.jpg";
import image9 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image009.jpg";
import image10 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image010.jpg";
import image11 from "/Users/nikkylu/lumed/src/pages/components/blood.fld/image011.png";
import "./Home.css"

const Blood = () => {
  return (
<div className="Home">
   <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Lancets, sterile, CE</div>
        <div>stainless steel tip, with stainless steel handle or plastic handle, usual or safety type</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Collection Needle, pen type, sterile, CE</div>
        <div>Blood Collection Needle, sterile, CE</div>
        <div>usual or safety type, with or without wing, various sizes</div>
    </div>
</div>


<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Fistula Needles, sterile, CE</div>
        <div>usual or safety type</div>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Specimen Collection Tubes</div>
        <div>various sizes and types</div>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image6} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Blood Collection Bags, sterile, ISO 3826, USP 23</div>
        <div>various sizes</div>
    </div>
</div>

<div className="Home-con">
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Absorbent Sponges</div>
    </div>
</div>

<div className="Home-con">
    <img src={image6} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Transfusion Set, sterile, ISO1135-4, CE</div>
        <div>various types</div>
    </div>
</div>

<div className="Home-con">
    <img src={image7} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Transfusion Set, sterile, ISO1135-4, CE</div>
        <div>with Double Chamber</div>
    </div>
</div>

<div className="Home-con">
    <img src={image8} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Pressure Transducers & Accessories</div>
    </div>
</div>

<div className="Home-con">
    <img src={image9} className="Home-sp"/>
    <div className="Home-s">
        <div>Blood Pressure Infuser, various sizes</div>
    </div>
</div>

<div className="Home-con">
    <img src={image10} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Haemodialysers, sterile, CE</div>
    </div>
</div>

<div className="Home-con">
    <img src={image11} className="Home-sp"/>
    <div className="Home-s">
        <div>Disposable Blood Lines (Tubes), sterile, CE</div>
    </div>
</div>




        </div>
   
  )
}

export default Blood;
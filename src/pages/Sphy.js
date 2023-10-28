import image1 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image002.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image003.png";
import image4 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image004.jpg";
import image5 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image005.jpg";
import image6 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image006.jpg";
import image7 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image007.png";
import image8 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image008.jpg";
import image9 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image009.jpg";
import image10 from "/Users/nikkylu/lumed/src/pages/components/sphy.fld/image010.png";

import "./Home.css"

const Sphy = () => {
  return (
<div className="Home">
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Aneroid Sphygmomanometer, CE</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Stethoscope, CE</div>
        <div>single head / dual head</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <img src={image4} className="Home-sp"/>
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>Tourniquet, various types and sizes</div>
    </div>
</div>

<div className="Home-con">
    <img src={image6} className="Home-sp"/>
    <div className="Home-s">
        <div>Wooden Tongue Depressor, sterile or non-sterile</div>
        <div>size: adult 150 x 20mm, 150 x 18mm; child 140 x 14mm</div>
    </div>
</div>

<div className="Home-con">
    <img src={image7} className="Home-sp"/>
    <img src={image8} className="Home-sp"/>
    <img src={image9} className="Home-sp"/>
    <div className="Home-s">
        <div>Wood Cervical Scrapers, sterile or non-sterile</div>
        <div>size: 17.5 cm x 7 inches length</div>
    </div>
</div>

<div className="Home-con">
    <img src={image10} className="Home-sp"/>
    <div className="Home-s">
        <div>ID-Band, various types and sizes</div>
    </div>
</div>


        </div>
   
  )
}

export default Sphy;
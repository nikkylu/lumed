import image1 from "/Users/nikkylu/lumed/src/pages/components/glove.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/glove.fld/image002.png";
import image3 from "/Users/nikkylu/lumed/src/pages/components/glove.fld/image003.jpg";
import "./Home.css"

const Glove = () => {
  return (
<div className="Home">
    <div>Latex/Nitrile Surgical Gloves, Condoms</div>
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Latex Surgical Gloves, sterile, EN 455 / ASTM 3577,</div>
        <div>premium quality, CE</div>
        <div>powder free (or pre-powdered), inner side coated,</div>
        <div>anatomic shaped, rough surface, usual or dry type</div>
        <div>size: 6, 6 1/2, 7, 7 1/2, 8, 8 1/2, 9</div>
    </div>
</div>
<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Nitrile Surgical Gloves, sterile, CE</div>
        <div>size: 6, 6 1/2, 7, 7 1/2, 8, 8 1/2, 9</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Latex Condoms, ISO 4074:2015, CE</div>
        <div>smooth surface / ribbed surface / dotted surface</div>
        <div>with or without scent</div>
        <div>size: 49 +/-2mm, 53+/-2mm, 55+/-2mm</div>
        <div>various types of packs</div>
    </div>
</div>

        </div>
   
  )
}

export default Glove;
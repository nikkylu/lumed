import image1 from "/Users/nikkylu/lumed/src/pages/components/breath.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/breath.fld/image002.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/breath.fld/image003.jpg";
import image4 from "/Users/nikkylu/lumed/src/pages/components/breath.fld/image004.jpg";
import image5 from "/Users/nikkylu/lumed/src/pages/components/breath.fld/image005.jpg";
import "./Home.css"

const Breath = () => {
  return (
<div className="Home">
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Breathing Kit, Breathing Anaesthesia Kit</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Breathing Mask</div>
        <div>Breathing Anaesthesia Mask</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Endotracheal Tubes, sterile, CE</div>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Tracheotomy Tubes, sterile, CE, various sizes</div>
    </div>
</div>

<div className="Home-con">
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>Suction Tubes</div>
    </div>
</div>



        </div>
   
  )
}

export default Breath;
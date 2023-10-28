import image1 from "/Users/nikkylu/lumed/src/pages/components/dress.fld/image001.png";
import image2 from "/Users/nikkylu/lumed/src/pages/components/dress.fld/image002.jpg";
import "./Home.css"

const Dressing = () => {
  return (
<div className="Home">
   <div className="Home-con">
    {/* <img src={image1} className="Home-sp"/> */}
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Dental Implant Kit</div>
        <p>Premium Type/Efficient Type/Economy Type</p>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image2} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Urinary Surgery Kit</div>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image3} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Brain Surgery Kit</div>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image4} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Interventional Surgery Kit</div>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image5} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Orthopedic Joint Surgery Kit</div>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image6} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Abdominal Surgery Kit</div>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image7} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Obstetric Operating Kit</div>
        <p>(eutocia)</p>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image8} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Obstetric Operating Kit</div>
        <p>(cesarean)</p>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image9} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Aseptic Operating Kit</div>
        <p>(type I or type II)</p>
    </div>
</div>

<div className="Home-con">
    {/* <img src={image10} className="Home-sp"/> */}
    <div className="Home-s">
        <div>Ophthalmic Operating Kit</div>
    </div>
</div>


        </div>
   
  )
}

export default Dressing;
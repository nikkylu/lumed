import image1 from "/Users/nikkylu/lumed/src/pages/components/paris/image043.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/paris/image044.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/paris/image045.png";
import image4 from "/Users/nikkylu/lumed/src/pages/components/paris/image046.jpg";
import "./Home.css"

const Paris = () => {
  return (
<div className="Home">
    <div> Plaster Of Paris Bandages, Synthetic Casting Bandages, Orthopaedic Paddings</div>
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Plaster of Paris Bandage, BP/HQ, CE</div>
        <div>Usual quality / medium quality / premium quality. Size: 5cm/7.5cm/10cm/12.5cm/15cm/20cm x 2.7m/3m/4.5m.</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Synthetic Casting Bandage, BP/HQ, CE</div>
        <div>Size: 5cm/7.5cm/10cm/15cm x 3.6m.</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Elastic Tubular Bandage, BP/HQ, CE</div>
        <div>Cotton + spandex, or 100% cotton, non-bleached, various sizes. Good for use as paddings for POP bandages or Synthetic Casting Bandages.</div>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Orthopaedic Padding, BP/HQ, CE</div>
        <div>100% cotton, or 50% viscose+50% polyester, or 100% viscose. Size: 5cm/7.5cm/10cm/15cm x 2.7m/3m/4.5m.</div>
    </div>
</div>


        </div>
   
  )
}

export default Paris;
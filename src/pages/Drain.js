import image1 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image001.png";
import image2 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image002.jpg";
import image3 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image003.jpg";
import image4 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image004.png";
import image5 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image005.jpg";
import image6 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image006.jpg";
import image7 from "/Users/nikkylu/lumed/src/pages/components/drain.fld/image007.jpg";
import "./Home.css"

const Drain = () => {
  return (
<div className="Home">
    <div>Drainage Bags, Tubes & Irrigation Set</div>
    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    <div className="Home-s">
        <div>Drainage Bag, sterile, CE</div>
        <div>2000ml, 3000ml</div>
    </div>
</div>

<div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Wound Drainage Reservoir, sterile, CE</div>
        <div>200ml, 400ml, 800ml</div>
    </div>
</div>

<div className="Home-con">
    <img src={image3} className="Home-sp"/>
    <div className="Home-s">
        <div>Urine Bag, Paediatric, sterile, CE</div>
        <div>100ml, 200ml, 300ml, 400ml, with or without non-return valve</div>
    </div>
</div>

<div className="Home-con">
    <img src={image4} className="Home-sp"/>
    <div className="Home-s">
        <div>Urine Bag, sterile/non-sterile, ISO 8669:1996, CE</div>
        <div>500ml, 750ml, 1000ml, 1500ml, 2000ml, with non-return valve</div>
    </div>
</div>

<div className="Home-con">
    <img src={image5} className="Home-sp"/>
    <div className="Home-s">
        <div>Urostomy Pouch, sterile, CE</div>
        <div>one-piece or two-piece type, various sizes</div>
    </div>
</div>

<div className="Home-con">
    <img src={image6} className="Home-sp"/>
    <div className="Home-s">
        <div>Foley Balloon Catheter, sterile, CE</div>
        <div>Latex (or silicone), but silicone coated, various sizes</div>
    </div>
</div>

<div className="Home-con">
    <img src={image7} className="Home-sp"/>
    <div className="Home-s">
        <div>Irrigation Set, sterile, CE</div>
    </div>
</div>


        </div>
   
  )
}

export default Drain;
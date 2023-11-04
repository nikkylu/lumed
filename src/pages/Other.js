
import "./Home.css"
import t from "/Users/nikkylu/lumed/src/pages/components/Other/Other.png";
import p from "/Users/nikkylu/lumed/src/pages/components/Other/Other 2.png";
const Other = () => {
  return (
<div className="Home">
    <div>Other Products</div>
   <div className="Home-con">
    <img src={t} className="Home-sp"/>
    <div className="Home-s">
        <div>Pseudo-Ginseng Drink</div>
        <p>15ml/bottle, 100% natural(without any preservatives), cold-extracted(high-tech to keep the active constituents)from fresh complete pseudo-ginseng plant (the flowers,leaves,stems and roots)
+ drinking warter, 1 bottle of 15ml is equivalent to about 5pcs of complete fresh pseudo-ginseng for the absorption of drinkers, and this drink includes the main natural nutritional components 
ginsenoside Rb3, 110mg/100ml,
and ginsenoside Rg1, 80mg/100ml.</p>
    </div>
</div>

<div className="Home-con">
    <img src={p} className="Home-sp"/>
    <div className="Home-s">
        <div>Lysozame Buccal Sweets</div>
        <p>This tablet sweet contains the main component lysozame 0.8g each, with various tastes for option</p>
    </div>
</div>
</div>
   
  )
}

export default Other;
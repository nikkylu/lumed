import "./Home.css"

const News = () => {
  const newsItems = [
    "03/2026: Amber Syringes are available.",
    "12/2025: Various Surgical Drapes and Draping Kits are available.",
    "12/2025: Blood Glucose Meters are added in our products.",
    // "*10/2023 ：Pseudo-Ginseng Drink 15ml and Lysozyme Buccal Tablets  are added in our products as foods good for health.",
    "06/2023: LatexSurgical Gloves，powder-free，usual or dry type，rough outer surface，smooth inner coated surface，approx. 0.30-0.35mm or approx. 0.40-0.45mm   average double thickness are with excellent/premium quality，big capacity and competitive prices.",
    "05/2023: Various Surgical Device and/or Dressing Kits，for most kinds of operations in hospitals ，are available.",
    "03/2022: Plaster of Paris Bandages are with excellent performance similar as leading brands，but at much competitive prices.",
    "10/2021: Mercury-Free Oval Thermometers with the similar nice performance as leading brands are avalilable.",
    "08/2021: Absorbable or non-absorbable surgical sutures are available， with  or without needles，with usual quality or premium quality.",
    "05/2021: Latex Folly Balloon Catheters，Endo-Tubes and TT-Tubes，with excellent quality，are available."
  ];

  return (
    <div className="Home">
      <div>News:</div>
      {newsItems.map((item, index) => (
        <div className="Home-t" key={index}>{item}</div>
      ))}
    </div>
  );
};

export default News;

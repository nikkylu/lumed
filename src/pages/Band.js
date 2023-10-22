import "./Home.css"
import a from "/Users/nikkylu/lumed/src/pages/components/band/a.jpg";
import b from "/Users/nikkylu/lumed/src/pages/components/band/b.jpg";
import c from "/Users/nikkylu/lumed/src/pages/components/band/c.jpg";
import d from "/Users/nikkylu/lumed/src/pages/components/band/d.jpg";
import e from "/Users/nikkylu/lumed/src/pages/components/band/e.jpg";




const Band = () => {
  return (
  <div className="Home">
      <div className="Home-con">
      <img src={a} className="Home-sp"/>
      <div className="Home-s">
          <div>Self-adhesive Elastic Bandage, BP/HQ, CE</div>
          <div>pure cotton or non-woven fabrics and natural rubber, various sizes.</div>
          <div>good for use of medical fixation and bandaging, emergency rescue in accident and war, protection in various trainings, competitions and sports, field operation, occupational safety protection, self-protection and rescue in family health, animal medical bandaging and protection of animals in sports, etc.</div>
      </div>
  </div>

  <div className="Home-con">
      <img src={b} className="Home-sp"/>
      <div className="Home-s">
          <div>Elastic Crepe Bandage, BP/HQ, CE</div>
          <div>cotton+polyester, or 100% cotton, non-bleached, weight 75g/sqm or 90g/sqm, with/without aluminum clips or elastic clips.</div>
          <div>sizes: 5cm/7.5cm/10cm/15cm x 4.5m/5m</div>
          <div>good for use as the supporting bandage for strains and sprains, fix with hot or cold compress, as an external fixation dressing to assist the healing of the wound, or in pet injuries, etc.</div>
      </div>
  </div>

  <div className="Home-con">
      <img src={c} className="Home-sp"/>
      <div className="Home-s">
          <div>Elastic Plain Bandage, BP/HQ, CE</div>
          <div>cotton+polyester, or 100% cotton, non-bleached, with/without aluminum clips or elastic clips.</div>
          <div>sizes: 5cm/7.5cm/10cm/15cm x 4.5m/5m</div>
          <div>good for use of surgical dressing care, all parts of the body external bandaging, field training, trauma first aid, etc.</div>
      </div>
  </div>

  <div className="Home-con">
      <img src={d} className="Home-sp"/>
      <div className="Home-s">
          <div>Elastic Conforming Bandage (Elastic PBT Bandage), BP/HQ, CE</div>
          <div>polyester and cotton, plain, white,</div>
          <div>sizes: 5cm/7.5cm/10cm/15cm x 4.5m/5m</div>
          <div>good for use of surgical dressing care, all parts of the body external bandaging, field training, trauma first aid, etc.</div>
      </div>
  </div>

  <div className="Home-con">
      <img src={e} className="Home-sp"/>
      <div className="Home-s">
          <div>Elastic Tubular Bandage, BP/HQ, CE</div>
          <div>cotton + spandex, or 100% cotton, non-bleached, various sizes,</div>
          <div>good for use as paddings for POP bandages or Synthetic Casting Bandages.</div>
      </div>
  </div>

  </div>
  )
}

export default Band;
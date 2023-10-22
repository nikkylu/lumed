import a from "/Users/nikkylu/lumed/src/pages/components/tape/a.jpg";
import b from "/Users/nikkylu/lumed/src/pages/components/tape/b.jpg";
import c from "/Users/nikkylu/lumed/src/pages/components/tape/c.jpg";
import d from "/Users/nikkylu/lumed/src/pages/components/tape/d.jpg";
import e from "/Users/nikkylu/lumed/src/pages/components/tape/e.jpg";
import f from "/Users/nikkylu/lumed/src/pages/components/tape/f.jpg";

const Tape = () => {
  return (
    <div className="Home">
            <div className="Home-con">
    <img src={a} className="Home-sp"/>
    <div className="Home-s">
        <div>Zinc Oxide Adhesive Plaster, BP/HQ, CE</div>
        <div>water-impermeable/permeable, white or skin coloured tapes coated with zinc oxide adhesive plaster (with rubber) or coated with zinc oxide hot melt plaster or acrylic acid adhesive plaster, rolled on plastic spool with/without plastic cover(sleeve), or the tapes with zig-zag cut edges rolled on a plastic core.</div>
        <div>size: 1.25cm/2.5cm/5.0cm/7.5cm/10cm x 4.5m/5m</div>
    </div>
</div>

<div className="Home-con">
    <img src={b} className="Home-sp"/>
    <div className="Home-s">
        <div>Zinc Oxide Perforated Plaster, BP/HQ, CE</div>
        <div>white / skin coloured perforated tapes coated with zinc oxide hot melt plaster rolled on backing paper.</div>
        <div>size: 10cm x 5m, 18cm x 5m</div>
    </div>
</div>

<div className="Home-con">
    <img src={c} className="Home-sp"/>
    <div className="Home-s">
        <div>Silk Adhesive Plaster, BP/HQ, CE</div>
        <div>white colour tape coated with acrylic acid adhesive rolled on plastic core.</div>
        <div>size: 2.5cm/5cm/7.5cm/10cm x 9.1m/5m</div>
    </div>
</div>

<div className="Home-con">
    <img src={d} className="Home-sp"/>
    <div className="Home-s">
        <div>PE Adhesive Tape, BP/HQ, CE</div>
        <div>transparent tape, micro-perforated, coated with hot melt adhesive plaster or acrylic acid adhesive plaster, rolled on a plastic core.</div>
        <div>size: 1.25cm/2.5cm/5cm/7.5cm x 5m/9.1m</div>
    </div>
</div>

<div className="Home-con">
    <img src={e} className="Home-sp"/>
    <div className="Home-s">
        <div>Non-Woven Adhesive Tape, BP/HQ,CE</div>
        <div>non-woven tape coated with hot melt adhesive plaster or acrylic acid adhesive plaster, rolled on a plastic core.</div>
        <div>size: 1.25cm/2.5cm/5cm/7.5cm x 5m/9.1m</div>
    </div>
</div>

    <div className="Home-con">
        <img src={f} className="Home-sp"/>
        <div className="Home-s">
            <div>Silicone Adhesive Tape, BP/HQ, CE</div>
            <div>transparent PU tape coated with silicone gel, rolled on a plastic spool.</div>
            <div>size: 1.9cm/2.5cm/5cm x 1.5m/5m</div>
            <div>good for use on patients where the skin condition is poor, sensitive, fragile, or need to replace the dressing in the same skin place, such as the patients need radiation therapy, chemotherapy, dialysis, new-born baby and also the infant; applicable to variety of in-dwelling catheters, electrodes, or other external fixation that requires gentle but robust skin protection and adhesion; protect the skin which have the risk of ulcer of catheters, or the skin need to be radiation therapy. can not be used with oxidant, such as hypochlorite solution and hydrogen peroxide solution; the patients who are allergic to silicone should be use with caution.</div>
        </div>
    </div>




    </div>
  )
}

export default Tape;
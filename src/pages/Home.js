import './Home.css';
import { Link } from 'react-router-dom';

import a from "./components/pic/Adhesive Tapes.jpeg";
import b from "./components/pic/Blood Collection & Transfusion & Filterings.jpeg";
import c from "./components/pic/Cotton & Gauze.jpeg";
import d from "./components/pic/Drainage Bags Tubes & Irrigation Set.jpeg";
import e from "./components/pic/Elastic Bandages.jpeg";
import f from "./components/pic/Endo-Tube & TT-Tube Suction Tube Breathing Circuits Masks.jpeg";
import g from "./components/pic/Infusions.jpeg";
import h from "./components/pic/Latex:Nitrile Surgical Gloves & Condoms.jpeg";
import i from "./components/pic/Mercury-Free Oval Thermometers Digital Thermometers.jpeg";
import j from "./components/pic/New Premium Quality Recommended.jpeg";
import k from "./components/pic/Plaster Of Paris Bandages Synthetic Casting Bandages Orthopaedic Paddings.jpeg";
import l from "./components/pic/Sphygmomanometer Stethoscope & Tourniquet Tougue Depressor & ID-Band.jpeg";
import m from "./components/pic/Surgical : Isolation Gowns & Face Masks etc..jpeg";
import n from "./components/pic/Surgical Blades Scalpels & Sutures Sterilization Swabs etc..jpeg";
import o from "./components/pic/Syringes & Needles.jpeg";
import p from "./components/pic/Various Dental Products & Kits.jpeg";
import q from "./components/pic/Various Surgical Device Kits.jpeg";
import r from "./components/pic/Various Surgical Dressing Device Kits.jpeg";
import s from "./components/pic/Various Wound Dressings.jpeg";
import t from "./components/pic/Other.png";

const categories = [
  { to: "/Premium",  img: j, title: "Premium Recommended",                desc: "Our flagship selection — top-grade quality, CE certified.", featured: true },
  { to: "/Needle",   img: o, title: "Syringes & Needles",                  desc: "Disposable, safety, insulin — ISO 7886 / ISO 7864." },
  { to: "/Infusion", img: g, title: "Infusions",                            desc: "IV sets and accessories — ISO 8536 compliant." },
  { to: "/Blood",    img: b, title: "Blood Collection, Transfusion & Filtering", desc: "Vacuum tubes, blood bags and filtration systems." },
  { to: "/Drain",    img: d, title: "Drainage Bags, Tubes & Irrigation",    desc: "Urinary, surgical drainage and irrigation sets." },
  { to: "/Thermo",   img: i, title: "Thermometers",                         desc: "Mercury-free oval and digital — ISO 12470-1." },
  { to: "/Sphy",     img: l, title: "Diagnostic Instruments",               desc: "Sphygmomanometers, stethoscopes, tourniquets, ID bands." },
  { to: "/Glove",    img: h, title: "Surgical Gloves & Condoms",            desc: "Latex / nitrile — EN 455, ASTM 3577, ISO 4074." },
  { to: "/Blade",    img: n, title: "Surgical Blades, Scalpels & Sutures",  desc: "Sterilization swabs and surgical sharps." },
  { to: "/Device",   img: q, title: "Surgical Device Kits",                 desc: "Pre-assembled kits for clinical procedures." },
  { to: "/Dressing", img: r, title: "Surgical Dressing & Device Kits",      desc: "Specialty kits across all major surgical disciplines." },
  { to: "/Dental",   img: p, title: "Dental Products & Kits",               desc: "Consumables and instrument sets for dental clinics." },
  { to: "/Breath",   img: f, title: "Breathing Circuits & Tubes",           desc: "Endo-tubes, TT-tubes, suction and masks." },
  { to: "/Gauze",    img: c, title: "Cotton & Gauze",                       desc: "Sterile and non-sterile, wide format range." },
  { to: "/Paris",    img: k, title: "Casting & Orthopaedic Bandages",       desc: "Plaster of Paris, synthetic casting, orthopaedic padding." },
  { to: "/Band",     img: e, title: "Elastic Bandages",                     desc: "Crepe, cohesive, and compression bandages." },
  { to: "/Wound",    img: s, title: "Wound Dressings",                      desc: "Sterile dressings — film, foam, hydrocolloid and more." },
  { to: "/Tape",     img: a, title: "Adhesive Tapes",                       desc: "Surgical, paper, silk and transparent tapes." },
  { to: "/Glown",    img: m, title: "Gowns, Face Masks & PPE",              desc: "Surgical and isolation gowns, face masks and shields." },
  // { to: "/Other",    img: t, title: "Health Products",                      desc: "Additional consumer health and consumables range." },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">Trusted partner since 2009</span>
            <h1 className="hero__title">
              Certified medical devices and surgical dressings made to European standards.
            </h1>
            <p className="hero__lede">
              Hangzhou Lumed Commercial Co., Ltd. supplies medical consumables to distributors
              across Europe and other global regions delivering consistent quality, competitive pricing, and dependable lead-times.
            </p>
            <div className="hero__actions">
              <a href="#products" className="btn btn--primary">Browse catalog</a>
              <a href="mailto:lumedico@outlook.com" className="btn btn--ghost">Request a quote</a>
            </div>
          </div>

          <div className="hero__stats" aria-label="Company highlights">
            <div className="hero__stat">
              <span className="hero__stat-value">30+</span>
              <span className="hero__stat-label">Years of expertise</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">20</span>
              <span className="hero__stat-label">Product categories</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">CE / ISO</span>
              <span className="hero__stat-label">Certified supply</span>
            </div>
          </div>
        </div>
      </section>

      <section className="standards" aria-label="Compliance and standards">
        <div className="standards__inner">
          <span className="standards__label">Compliant with</span>
          <span className="standards__pill">CE Marking</span>
          <span className="standards__pill">ISO 13485</span>
          <span className="standards__pill">EN 455</span>
          <span className="standards__pill">ASTM 3577</span>
          <span className="standards__pill">ISO 7886 / 7864</span>
          <span className="standards__pill">ISO 8536</span>
        </div>
      </section>

      <section id="products" className="catalog">
        <div className="catalog__head">
          <h2 className="catalog__title">Product catalog</h2>
          <p className="catalog__sub">
            Explore our full range. Click any category for detailed
            specifications, <span style={{ whiteSpace: 'nowrap' }}>sizes and certifications.</span>
          </p>
        </div>

        <div className="catalog__grid">
          {categories.map(({ to, img, title, desc, featured }) => (
            <Link
              to={to}
              key={to}
              className={`product-card${featured ? " product-card--featured" : ""}`}
            >
              <div className="product-card__media">
                <img src={img} alt={title} loading="lazy" />
                {featured && <span className="product-card__badge">Recommended</span>}
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__desc">{desc}</p>
                <span className="product-card__cta">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <div>
            <h2>Looking for a reliable European supply partner?</h2>
            <p>Tell us your volumes and specifications — we'll respond as soon as possible.</p>
          </div>
          <a href="mailto:lumedico@outlook.com" className="btn btn--primary btn--lg">
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

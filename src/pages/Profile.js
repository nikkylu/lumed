import "./Home.css";
import logo from "../sources/logo-text.png";

const Profile = () => {
  return (
    <div className="Home profile">
      <div>About &amp; Contact</div>

      <div className="profile__grid">
        <section className="profile__about">
          <img src={logo} alt="Lumed" className="profile__logo" />
          <h2 className="profile__heading">Company profile</h2>
          <p className="profile__lede">
            Established in 2009, Hangzhou Lumed Commercial Co., Ltd. brings
            over three decades of expertise to the medical devices and
            dressings sector. Our commitment to certified quality, competitive
            pricing, and dependable service has made us a trusted partner for
            European distributors and hospitals.
          </p>
          <p className="profile__body">
            We supply a comprehensive catalog of CE-marked and ISO-certified
            medical consumables — from premium surgical gloves and infusion
            sets to specialty dressing kits — and we invite new partners to
            join us in advancing global healthcare.
          </p>

          <div className="profile__pillars">
            <div className="pillar">
              <h3>Certified quality</h3>
              <p>CE, ISO 13485, EN 455, ASTM and ISO 7886 / 7864 / 8536 across our range.</p>
            </div>
            <div className="pillar">
              <h3>European focus</h3>
              <p>Documentation, labelling and logistics tailored for EU distributors.</p>
            </div>
            <div className="pillar">
              <h3>Reliable supply</h3>
              <p>30+ years of sourcing relationships and stable production capacity.</p>
            </div>
          </div>
        </section>

        <aside className="profile__contact">
          <h2 className="profile__heading">Contact us</h2>
          <p className="profile__company">Hangzhou Lumed Commercial Co., Ltd.</p>

          <dl className="contact-list">
            <div className="contact-list__row">
              <dt>Address</dt>
              <dd>Rm 1-1919, East King Plaza<br />No. 1 Yue-wang Rd<br />310006 Hangzhou, Zhejiang<br />P.R. China</dd>
            </div>
            <div className="contact-list__row">
              <dt>Telephone</dt>
              <dd>
                <a href="tel:+8657187072941">+86-571-87072941</a><br />
                <a href="tel:+8657187752038">+86-571-87752038</a>
              </dd>
            </div>
            <div className="contact-list__row">
              <dt>Fax</dt>
              <dd>+86-571-87752038</dd>
            </div>
            <div className="contact-list__row">
              <dt>Email</dt>
              <dd>
                <a href="mailto:lumedico@outlook.com">lumedico@outlook.com</a><br />
                <a href="mailto:konca@189.cn">konca@189.cn</a>
              </dd>
            </div>
            <div className="contact-list__row">
              <dt>LinkedIn</dt>
              <dd>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-linkedin"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </dd>
            </div>
          </dl>

          <a href="mailto:lumedico@outlook.com?subject=Quote%20request" className="btn btn--primary btn--lg profile__cta">
            Request a quote
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Profile;

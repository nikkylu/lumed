import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Layout.css";
import logo from "../sources/logo.png";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="Lumed home">
            <img src={logo} alt="Lumed logo" className="brand__logo" />
            <span className="brand__text">
              <span className="brand__name">Lumed</span>
              <span className="brand__tagline">Medical Devices &amp; Dressings</span>
            </span>
          </Link>

          <button
            className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
            <NavLink to="/" end className="site-nav__link">Products</NavLink>
            <NavLink to="/News" className="site-nav__link">News</NavLink>
            <NavLink to="/Profile" className="site-nav__link">About &amp; Contact</NavLink>
            <a href="mailto:lumedico@outlook.com" className="site-nav__cta">Request a quote</a>
          </nav>
        </div>
      </header>

      <main className="site-main">
        {location.pathname !== "/" && (
          <div className="back-bar">
            <Link to="/" className="back-link" aria-label="Back to catalog">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
              <span>Back to catalog</span>
            </Link>
          </div>
        )}
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__col site-footer__col--brand">
            <div className="brand brand--footer">
              <img src={logo} alt="" className="brand__logo" />
              <span className="brand__name">Lumed</span>
            </div>
            <p className="site-footer__about">
              Hangzhou Lumed Commercial Co., Ltd. — a trusted supplier of certified
              medical devices and dressings to distributors and hospitals across Europe.
            </p>
            <div className="cert-row" aria-label="Certifications and standards">
              <span className="cert-pill">CE</span>
              <span className="cert-pill">ISO 13485</span>
              <span className="cert-pill">EN 455</span>
              <span className="cert-pill">ASTM</span>
            </div>

            <div className="social-row">
              <span className="social-row__label">Follow us</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Lumed on LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__title">Explore</h4>
            <Link to="/">Product catalog</Link>
            <Link to="/Premium">Premium recommended</Link>
            <Link to="/News">News &amp; updates</Link>
            <Link to="/Profile">Company profile</Link>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__title">Contact</h4>
            <p>Rm 1-1919, East King Plaza,<br />No. 1 Yue-wang Rd,<br />310006 Hangzhou, Zhejiang, P.R. China</p>
            <p>
              <a href="tel:+8657187072941">+86-571-87072941</a><br />
              <a href="mailto:lumedico@outlook.com">lumedico@outlook.com</a>
            </p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Hangzhou Lumed Commercial Co., Ltd. All rights reserved.</span>
          <span>Established 2009 · Serving European partners worldwide</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

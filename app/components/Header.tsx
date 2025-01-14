"use client";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import Link from "next/link";
import useMenuToggleEffect from "./useMenuToggleEffect";

gsap.registerPlugin(CustomEase);

const Header = () => {
  useMenuToggleEffect();

  return (
    <header>
      <div className="logo">
        <Link href="#">designside</Link>
      </div>

      <div className="menu-toggle closed">
        <div className="menu-toggle-icon">
          <div className="hamburger">
            <div className="menu-bar" data-position="top"></div>
            <div className="menu-bar" data-position="bottom"></div>
          </div>
        </div>
        <div className="menu-copy">
          <p>Menu</p>
        </div>

        <div className="menu">
          <div className="col col-1">
            <div className="menu-logo">
              <Link href="#">designside</Link>
            </div>

            <div className="links">
              <div className="link">
                <Link href="#">Projects</Link>
              </div>
              <div className="link">
                <Link href="#">Expertise</Link>
              </div>
              <div className="link">
                <Link href="#">Agency</Link>
              </div>
              <div className="link">
                <Link href="#">Contact</Link>
              </div>
            </div>

            <div className="video-wrapper">
              <video autoPlay muted loop>
                <source
                  src="https://stream.mux.com/pS5Jiva0000DnO00iBUYEr4LmCgLHS3Hd2yMxf55uhE8Ag/high.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="col col-2">
            <div className="socials">
              <div className="sub-col">
                <p>designside</p>
                <p>Berlin Sample str</p>
                <p>69001 Berlin</p>
                <p>Germany</p>
                <br />
                <p>contact@designside.de</p>
                <p>info@designside.de</p>
              </div>
              <div className="sub-col">
                <p>Instagram</p>
                <p>Linkedin</p>
                <p>Twitter</p>
                <p>Facebook</p>
                <br />
                <p>01 62 32 82 42</p>
              </div>
            </div>

            <div className="header">
              <h1>designside</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

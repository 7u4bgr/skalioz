import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import Logo from "../../../assets/images/logo1.png";
import { Sling as Hamburger } from "hamburger-react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../../../icons";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <Link to={"/"} className={styles.images}>
            <img src={Logo} alt="" />
          </Link>
          <div className={styles.services}>
            <Link to={"/about"}>Haqqımda</Link>
            <Link to={"/idiopatik"}>Müalicələr</Link>
            <h2>Kifoz</h2>
            <Link to={"/gallery"}>Galereya</Link>
            <Link to={"/contact"}>Əlaqə</Link>
          </div>
          <div className={styles.icons}>
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TiktokIcon />
          </div>
          <div className={styles.hamburger}>
            <Hamburger
              size={22}
              distance="lg"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className={styles.overlay}>
            <div className={styles.services}>
              <Link to={"/about"}>Haqqımda</Link>
              <Link to={"/idiopatik"}>Müalicələr</Link>
              <Link>Kifoz</Link>
              <Link to={"/gallery"}>Galereya</Link>
              <Link to={"/contact"}>Əlaqə</Link>
            </div>
            <div className={styles.icons}>
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
              <TiktokIcon />
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default React.memo(Header);

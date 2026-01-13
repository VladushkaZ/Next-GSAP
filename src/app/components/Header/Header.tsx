import { useEffect, useState } from "react";
import styles from "../../page.module.scss";
import LogoIcon from "../Icons/LogoIcon";
import MobileIcon from "../Icons/MobileIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloseIcon from "../Icons/CloseIcon";
import Menu from "./Menu";

const options = [
  {
    id: 0,
    label: "Discover",
    link: "/",
  },
  {
    id: 1,
    label: "Сreators",
    link: "/",
  },
  {
    id: 2,
    label: "Sell",
    link: "/",
  },
  {
    id: 3,
    label: "stats",
    link: "/",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to("#header", {
      background: "#fff",
      position: "fixed",
      paddingTop: 17,
      top: 0,
      y: 0,
      duration: 1,
      zIndex: 10000,
      scrollTrigger: {
        trigger: "#header",
        start: "10px top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);
  return (
    <header className={styles.header} id="header">
      <div className={styles.header_items}>
        <div className={styles.flex}>
          <LogoIcon />
          <span className={styles.logo_text}>DiveSea</span>
          <Menu options={options} menuOpen={menuOpen} />
        </div>
        <button className={styles.header_btn}>Connect Wallet</button>
        <div
          className={styles.mobile_icon}
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          {menuOpen ? <CloseIcon /> : <MobileIcon />}
        </div>
      </div>
    </header>
  );
}

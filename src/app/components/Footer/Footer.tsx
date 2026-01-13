import Link from "next/link";
import LogoIcon from "../Icons/LogoIcon";
import styles from "./footer.module.scss";
import { Rout } from "@/types";
import InIcon from "../Icons/InIcon";
import InstIcon from "../Icons/InstIcon";
import TwitIcon from "../Icons/TwitIcon";
import FaceIcon from "../Icons/FaceIcon";

const options = [
  {
    id: 0,
    label: "Privacy Policy",
    link: "/",
  },
  {
    id: 1,
    label: "Conditions",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    link: "/",
  },
  {
    id: 3,
    label: "Contact",
    link: "/",
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.flex_space}>
        <div className={styles.flex}>
          <LogoIcon />
          <span className={styles.logo_text}>DiveSea</span>
        </div>
        <div className={styles.menu}>
          {options.map((rout: Rout) => (
            <Link key={rout.id} href={rout.link}>
              {rout.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.flex_space}>
        <div className={styles.year}>
          <span>© 2023</span> <span> DiveSea All Rights Reserved.</span>
        </div>

        <div className={styles.icons}>
          <InstIcon />
          <InIcon />
          <FaceIcon />
          <TwitIcon />
        </div>
      </div>
    </div>
  );
}

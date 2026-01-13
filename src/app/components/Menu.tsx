"use client";

import styles from "../page.module.scss";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import InIcon from "./Icons/InIcon";
import InstIcon from "./Icons/InstIcon";
import TwitIcon from "./Icons/TwitIcon";
import FaceIcon from "./Icons/FaceIcon";
import { Rout } from "@/types";

export default function Menu({
  options,
  menuOpen,
}: {
  options: Rout[];
  menuOpen: boolean;
}) {
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        "#menu_open",
        {
          opacity: 0,
          display: "none",
          height: 0,
          duration: 0,
          ease: "power2.out",
        },
        {
          opacity: 1,
          display: "grid",
          height: "calc(100vh - 70px)",
          duration: 1,
          zIndex: 100,
          ease: "power2.out",
        }
      );
      gsap.to("html", { overflow: "hidden" });
    }
    if (!menuOpen) {
      gsap.to("html", { overflow: "auto" });
    }
  }, [menuOpen]);
  return (
    <div className={styles.menu_items}>
      <div className={styles.mobile_menu}>
        {menuOpen && (
          <div id="menu_open" className={`${menuOpen && styles.menu_open}`}>
            <div className={styles.grid}>
              <div className={styles.grid}>
                {options.map((rout: Rout) => (
                  <Link key={rout.id} href={rout.link}>
                    {rout.label}
                  </Link>
                ))}
              </div>
              <div className={styles.flex}>
                <InstIcon />
                <InIcon />
                <FaceIcon />
                <TwitIcon />
              </div>
            </div>
            <div className={styles.bottom_btn}>
              <button className={styles.header_btn}>Connect Wallet</button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.menu}>
        {options.map((rout: Rout) => (
          <Link key={rout.id} href={rout.link}>
            {rout.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

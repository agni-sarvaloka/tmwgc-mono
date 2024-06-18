import Image from "next/image";
import Link from "next/link";

import config from "../config/settings.json";
import styles from "./floatbar.module.css";

export default function Home() {
  const menuCtrls = config.controls.menu;
  const portCtrls = config.controls.portal;

  const menu = (
    <div className={styles.menu}>
      {menuCtrls.map((ctrl, key) => {
        return (
          <Link
            style={{ textDecoration: "none", fontWeight: "500" }}
            key={key}
            href={ctrl.src.push}
          >
            {ctrl.label}
          </Link>
        );
      })}
    </div>
  );

  const accessPort = (
    <Link style={{ textDecoration: "none" }} href={portCtrls.src.push}>
      {portCtrls.label}
    </Link>
  );

  const headbar = (
    <div className={styles.head}>
      <Image
        width={180}
        height={48}
        src={"/brand/tmwgc_brand.svg"}
        alt={"tmwgc_brand"}
      ></Image>
      {menu}
      {accessPort}
    </div>
  );

  const floatbarCtrls = config.controls.floatbar;

  const floatpanel = (
    <div className={styles.floatbar}>
      {floatbarCtrls.map((ctrl, key) => {
        return (
          <Link
            style={{ textDecoration: "none", fontWeight: "300" }}
            href={ctrl.src.push}
            key={key}
          >
            {ctrl.label}
          </Link>
        );
      })}
    </div>
  );

  const tailnote = (
    <div className={styles.tail}>
      <p>Privacy Policies</p>
      <p>Terms & Conditions</p>
      <p>Contact Helpdesk</p>
    </div>
  );

  return (
    <main className={styles.main}>
      {headbar}
      {floatpanel}
      {tailnote}
    </main>
  );
}

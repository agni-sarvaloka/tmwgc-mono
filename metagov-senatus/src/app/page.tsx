import Image from "next/image";
import Link from "next/link";

import config from "../config/settings.json";
import styles from "./page.module.css";

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

  const access = (
    <div className={styles.access}>
      <Image
        width={24}
        height={24}
        src={"/icons/access.svg"}
        alt={"access"}
      ></Image>
      <Link style={{ textDecoration: "none" }} href={portCtrls.src.push}>
        {portCtrls.label}
      </Link>
    </div>
  );

  const brand = (
    <Image
      width={180}
      height={42}
      src={"/brands/metagov_brand.svg"}
      alt={"tmwgc_brand"}
    ></Image>
  );

  const burger = (
    <Image
      className={styles.burger}
      width={24}
      height={24}
      src={"/icons/burger.svg"}
      alt={"burger"}
    ></Image>
  );

  const shift = (
    <div className={styles.shift}>
      <b>Overall</b>
      <Image
        width={24}
        height={24}
        src={"/icons/domain.svg"}
        alt={"domain"}
      ></Image>
    </div>
  );

  const headbar = (
    <div className={styles.head}>
      {burger}
      {brand}
      {/* {shift} */}
      {menu}
      {access}
    </div>
  );

  const domain = (
    <Image
      style={{
        position: "absolute",
        right: 0,
        marginRight: "16px",
      }}
      width={24}
      height={24}
      src={"/icons/domain.svg"}
      alt={"domain"}
    ></Image>
  );

  const floatbarCtrls = config.controls.floatbar;

  const floatpanel = (
    <div className={styles.floatbar}>
      {floatbarCtrls.map((ctrl, key) => {
        return (
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "300",
              whiteSpace: "nowrap",
            }}
            href={ctrl.src.push}
            key={key}
          >
            {ctrl.label.split(" ")[0]}
            <br></br>
            {ctrl.label.split(" ")[1]}
            {` `}
            {ctrl.label.split(" ")[2]}
          </Link>
        );
      })}
      {domain}
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

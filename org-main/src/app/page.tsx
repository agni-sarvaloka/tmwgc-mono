import Image from "next/image";
import Link from "next/link";

import config from "../config/settings.json";
import writer from "../config/writer.json";

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
      src={"/brand/tmwgc_brand.svg"}
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
      <p>Overall</p>
    </div>
  );

  const swap = (
    <div>
      <Image
        width={24}
        height={24}
        src={"/icons/domain.svg"}
        alt={"domain"}
      ></Image>
    </div>
  );

  const action = (
    <div className={styles.action}>
      <button>Become a partner</button>
    </div>
  );

  const headbar = (
    <div className={styles.head}>
      {burger}
      {brand}
      {shift}
      {menu}
      {swap}
      <p>Create</p>

      {action}
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

  const hero = (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>
          Building an autonomous, transparent and <br></br> a truly
          decentralized future for the world.
        </h1>
        <p>
          We are an open-source community foundation pioneering in the space of
          distributed spatial computing with a vision to advance the
          foundational infrastructures, ecosystems and mainstream market for
          spatial computing
        </p>
      </div>
    </div>
  );

  const shouter = (
    <div className={styles.shouter}>
      <p>
        We are excited to announce the launch of our metanet presales. The
        whitepaper is officially approved through community voting and the
        proposal has been ratified by 30K active voters. We thank you all for
        the overwhelmimg support and excitement
      </p>
      <p>Visit Website</p>
      <p>close X</p>
    </div>
  );

  const context = (
    <div className={styles.context}>
      <div className={styles.wrap}>
        <p>Relations</p>
        <p>Announcements</p>
      </div>
      <div className={styles.wrap}>
        <p>Preferences</p>
        <p>Heldesk</p>
      </div>
    </div>
  );

  const write = writer.features;

  const features = (
    <div className={styles.features}>
      <h1>We're the community</h1>
    </div>
  );

  return (
    <main className={styles.main}>
      {shouter}
      {context}
      {headbar}
      {floatpanel}
      {hero}
      {features}
      {tailnote}
    </main>
  );
}

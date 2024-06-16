import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const renderHead = (
  <div>
    <b>The Meta Web3 | Global Consortium </b>
  </div> )

  const renderTail = (
  <div>
    <p>Privacy Policies</p>
    <p>Terms & Conditions</p>
    <p>Contact Helpdesk</p>
  </div> )

  return (
    <main className={styles.main}>
      {renderHead}
      {renderTail}
    </main>
  );
}

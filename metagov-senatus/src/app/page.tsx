import styles from "./page.module.css";

import config from '../config/settings.json'

export default function Home() {

  const renderHead = (
  <div>
    <b>Metagov Senatus</b>
  </div> )

  const floatbarCtrls = config.controls.floatbar

  const floatbar = <div>
    {
      floatbarCtrls.map((ctrl,key)=>{
    return <a href={ctrl.src.push} key={key}>{ctrl.label}</a>
  })
    }
  </div>

  const renderTail = (
  <div>
    <p>Privacy Policies</p>
    <p>Terms & Conditions</p>
    <p>Contact Helpdesk</p>
  </div> )

  return (
    <main className={styles.main}>
      {renderHead}
      {floatbar}
      {renderTail}
    </main>
  );
}

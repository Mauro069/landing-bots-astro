import { useState } from "react";
import styles from "./TalkWithFrank.module.css";

export const TalkWithFrank = () => {
  const [show, setShow] = useState(true);

  return (
    <section id="contact" className={`section ${styles["talk-with-frank"]}`}>
      <h3 className={styles.title}>Contact</h3>

      {show ? (
        <button className={styles.button} onClick={() => setShow(false)}>
          <img className={styles.img} src="/assets/cabeza.png" />
          <p className={styles.text}>Talk with Frank</p>
        </button>
      ) : (
        <div className={styles.socials}>
          <a
            href="https://t.me/FrankBOTsMaker"
            target="_blank"
            className={styles.tl}
          >
            Telegram
          </a>
        </div>
      )}
    </section>
  );
};

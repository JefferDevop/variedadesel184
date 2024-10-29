import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>VARIEDADES EL 184</h1>
        <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(+57) 310 840 5860</li>
          <li>380 9082</li>
          
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Carrera 10 # 15-37</p>
      </div>
      </div>
      <FooterApp />
    </>
  );
}

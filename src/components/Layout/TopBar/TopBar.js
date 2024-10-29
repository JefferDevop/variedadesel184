import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
      <div className={styles.topBar}>
        <div className={styles.title}>        
          <h1 className={styles.name}>VARIEDADESEL184</h1>
        </div>
        <h6>COMPLETO SURTIDO DE CACHARRO Y COSMETICOS EN GENERAL</h6>
       
      </div>
      <h2 className={styles.name}>CatalogoInteractivo</h2>
    </div>
  );
}

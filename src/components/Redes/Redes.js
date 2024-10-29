import React from "react";
import styles from "./Redes.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsShop } from "react-icons/bs";

export function Redes() {
  return (
    <div className={styles.space}>
      <div className={styles.phone}>
        <p>
          <IoLogoWhatsapp size="22" color="#63f945" /> 310 840 5860
        </p>
        <p>
          <BsShop color="#63f945" size="22" /> Carrera 10 No. 15-37
        </p>
      </div>
    </div>
  );
}

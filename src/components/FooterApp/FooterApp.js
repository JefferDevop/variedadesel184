import { WhatsApp } from "../WhatsApp";
import styles from "./FooterApp.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { BtnLink } from "../Common";

import { useCart } from "@/hooks/useCart"; 

export function FooterApp() {
  const { total } = useCart();
  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BtnLink link={"/"} title={"HOME"} logo={<AiOutlineHome size={20} />} />
        <BtnLink
          link={"/featured"}
          title={"EXCL"}
          logo={<MdOutlineCategory size={20} />}
        />

        <WhatsApp
          phoneNumber="+573108405860"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />

        {/* <BtnLink
          link={"/ofert"}
          title={"OFER"}
          logo={<MdOutlineLocalOffer size={20} />}
        /> */}

        <div className={styles.cart}>
          <p>{total}</p>
          <BtnLink
            link={"/cart"}
            title={"CART"}
            logo={<AiOutlineShoppingCart size={20} />}
          />
        </div>

        <BtnLink
          link={
            "https://variedadesel184.catalogointeractivo.com.co/admin-dashboard/"
          }
          title={"ADMI"}
          logo={<CiUser size={20} />}
        />
      </div>
    </div>
  );
}

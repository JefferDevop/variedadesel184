import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          Bienvenidos a VARIEDADES EL 184, el catálogo definitivo de cacharros.
          Somos una tienda especializada en ofrecer una amplia selección de
          productos divertidos, curiosos y útiles para el hogar. En VARIEDADES EL 184, nos apasiona descubrir y compartir esos objetos que pueden
          alegrar tu día, sorprenderte y hacerte la vida más interesante.
          Nuestro catálogo está repleto de una variedad de productos originales,
          desde gadgets tecnológicos hasta juguetes retro, pasando por
          herramientas ingeniosas y artículos de decoración extravagantes, aseo
          personal entre otros. Nos esforzamos por brindar a nuestros clientes
          una experiencia de compra única. Nuestro equipo de expertos se encarga
          de buscar y seleccionar cuidadosamente cada producto que ofrecemos,
          asegurándonos de que cumpla con nuestros estándares de calidad. Ya sea
          que estés buscando un regalo original, un artículo de colección o
          simplemente algo para añadir un toque de extravagancia a tu vida, en
          VARIEDADES EL 184 encontrarás lo que necesitas. Además, nuestro equipo
          de atención al cliente estará encantado de ayudarte en todo momento,
          brindándote asesoramiento y respondiendo a tus preguntas. Explora
          nuestro catálogo en línea o visítanos en nuestra tienda física en el
          centro de de ciudad de Cali Carrera 10 # 15-37
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          En VARIEDADES EL 184, nuestra misión es ser el principal referente en
          el mundo de los cacharros, proporcionando a nuestros clientes una
          experiencia única y divertida al explorar y adquirir productos
          originales y de alta calidad.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          En VARIEDADADES EL 184, nuestra visión es convertirnos en un referente
          global en el mundo de los cacharros, siendo reconocidos por los precios más bajos del mercado,
         originalidad y calidad excepcional. 
        </p>
      </div>

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
  );
}

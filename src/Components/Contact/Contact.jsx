import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = React.useContext(ThemeContext);
  return (
    <footer
      className={styles.footer}
      id="contact"
      // style={{ background: `${newTheme.highlightBackground}` }}
    >
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Entrar em contato</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
        Estou procurando ativamente novas oportunidades, em Desenvolvedor front-end</p>
    
          <p style={{ color: `#00a0a0`, lineHeight: ``,fontSize:`20px` }}>
            {/* {" "} */}
            Email: guilhermealvesmor@gmail.com
          </p>

		  <p style={{ color: `#00a0a0`,fontSize:`20px`}}>
		  Mobile: +55-<span style={{ color: `#00a0a0`, fontSize:`20px`, textDecoration: `underline` }} >(61) 99397-9955</span>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </p>
		  <p style={{ color: `#00a0a0`,fontSize:`20px` }}>
            Endereço: Brasilia/DF, Brasil{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </p>
		  
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:7420959650"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Guilhermealves20101999"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/guilherme-alves-80b837179/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
      Projetado e construído por Guilherme Alves, 2022 Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Contact;

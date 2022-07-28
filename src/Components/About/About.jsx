import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";


const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://github.com/Guilhermealves20101999/portifolio-main/blob/master/src/assets/my_photo.jpg?raw=true"
      : "https://github.com/Guilhermealves20101999/portifolio-main/blob/master/public/developer.gif?raw=true";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/Guilhermealves20101999/portifolio-main/blob/master/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Sobre 
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Olá! Meu nome é Guilherme Alves e eu gosto de criar coisas que vivem
          a Internet. Meu interesse em desenvolvimento Front-End começou em 2019
          quando eu estava tentando editar coisas na web - me ensinou muito sobre
          HTML e CSS!. <br />
          <br /> Avançando para hoje, criei vários aplicativos da web
          e grandes projetos. Aprendi muito sobre trabalho em equipe, liderança,
          e comunicação. Após anos de treinamento rigoroso, aqui estou
          <span style={{ color: `#00a0a0` }}>
            {" "}
            procurando uma oportunidade como desenvolvedor Front-end
          </span>
          .
        </p>
      </div>
      
    </div>
  );
};

export default About;

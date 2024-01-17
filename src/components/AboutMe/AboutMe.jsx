import React from "react";
import image from "../../assets/images/about-me/avatar.jpeg";
import "./about-me.css";

const ContentText = () => {
  return (
    <section className="content__text">
      <h4 className="content__name">Денис</h4>
      <h5 className="content__about">Студент, начинающий разработчик, 19 лет.</h5>
      <div className="content_text">
        <p>
          Я живу в двух городах: Ташкент (Узбекистан) и Калининград (Россия).
          Учусь в Калининграде, в БФУ им. Канта, на информационной безопасности.
          Мне нравится заниматься разработкой, помимо Web-разработки, учу C#.
          Мне очень нравится изучать новые технологии и решать интересные задачи.
          Я всегда открыт для новых знакомств и общения.
        </p>
      </div>
      <a
        href="https://github.com/denis1527"
        target="_blank"
        className="content__link"
        rel="noreferrer"
      >
        GitHub
      </a>
    </section>
  );
};

const AboutMe = () => {
  return (
    <main className="about-me">
      <div className="about-me__wrapper">
        <div className="about-me__heading">
          <h3>Студент</h3>
        </div>

        <div className="about-me__content content">
          <ContentText />
          <ul className="content__image-list">
            <li><img src={image} alt="Avatar" className="content__image roll-in-right"/></li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;

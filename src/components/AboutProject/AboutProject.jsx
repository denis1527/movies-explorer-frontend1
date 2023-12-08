import React from 'react';
import './about-project.css';

const AboutProject = () => {
  return (
    <main id='about-project' className='about-project'>
      <div className="about-project__wrapper">
        <h2 className="about-project__about">О проекте</h2>

        <div className="about-project__content content">
          <div className="content__column">
            <h3 className="content__heading">Дипломный проект включал 5 этапов</h3>
            <p className="content__text">
              Составление плана, работа над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="content__column">
            <h3 className="content__heading">На выполнение диплома ушло 5 недель</h3>
            <p className="content__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className="content_timeline timeline">
          <div className="timeline__first-week">
            <div className="first-week_box first-week_box_color_green">1 неделя</div>
            <p>Back-end</p>
          </div>

          <div className="timeline__second-week">
            <div className="first-week_box first-week_box_color_dark">4 недели</div>
            <p>Front-end</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutProject;

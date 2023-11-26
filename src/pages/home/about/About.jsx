import MySection from '@components/_ui/section/MySection';
import './About.scss';

const About = () => {
  return (
    <MySection classNames={'about'} innerCl={'about__inner'} id="about">
      <h3 className="about__title title title-section">О нас</h3>
      <div className="about__card-outer">
        <div className="about__card  bg-pink-dark">
          <p className="about__card-title title">Работаем круглосуточно</p>
          <p className="about__card-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее
          </p>
        </div>
        <div className="about__card bg-green-dark">
          <p className="about__card-title title">Новейшее оборудование</p>
          <p className="about__card-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке
          </p>
        </div>
        <div className="about__card  bg-green-dark">
          <p className="about__card-title title">Собственная лаборатория</p>
          <p className="about__card-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке
          </p>
        </div>
        <div className="about__card  bg-green-light">
          <p className="about__card-title title">Оснащённые стационары</p>
          <p className="about__card-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее
          </p>
        </div>
        <div className="about__card  bg-green-light">
          <p className="about__card-title title">Аптека и зоомагазин</p>
          <p className="about__card-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее
          </p>
        </div>
        <div className="about__card  bg-pink-dark">
          <p className="about__card-title title">Груминг-салон</p>
          <p className="about__card-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке
          </p>
        </div>
      </div>
    </MySection>
  );
};

export default About;

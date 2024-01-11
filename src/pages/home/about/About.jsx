import MySection from '@components/_ui/section/MySection';
import './About.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { aboutSel, getAbout } from '@store/slices/about/aboutSlice';

const About = () => {
  const dispatch = useDispatch();
  const {about} = useSelector(aboutSel);

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  return (
    <MySection classNames={'about'} innerCl={'about__inner'} id="about">
      <h3 className="about__title title title-section">О нас</h3>
      <div className="about__card-outer">
        {
          about?.map(obj => (
            <div className="about__card" key={obj.id}>
              <p className="about__card-title title">Работаем круглосуточно</p>
              <p className="about__card-text">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее
              </p>
            </div>
          ))
        }
      </div>
    </MySection>
  );
};

export default About;

import './Header.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import MyBtn from '@components/_ui/btn/MyBtn';
import Logo from '@components/logo/Logo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { headerSel, setBurger } from '@store/slices/header/headerSlice';
import { clsx } from 'clsx';
import useWindowWidth from '@hooks/windowWidth';
import { metaSel } from '@store/slices/meta/metaSlice';
import Link from './link/Link';
import { disableScroll } from '@hooks/disableScroll';
import { enableScroll } from '@hooks/enableScroll';

const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    // Проверяем хэш в URL (например, '/page#section') и прокручиваем к соответствующей секции
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null; // Компонент не рендерится
};

const Header = () => {
  const dispatch = useDispatch();
  const { tel_num, city, address } = useSelector(metaSel);
  const { burger } = useSelector(headerSel);
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const navigate = useNavigate();
  const headerHeight = 64;

  useEffect(() => {
    navigate(location.pathname, { replace: true, state: {} });
  }, []);

  useEffect(() => {
    console.log(location.state);
    if (location.state?.sectionId) {
      const sectionId = location.state.sectionId;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          console.log('ttrruuee');
          console.log(section);
          window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: 'smooth',
          });
        }
      }, 300);
    }
  }, [location]);

  const onBurger = () => {
    if (!burger) {
      dispatch(setBurger(true));
      disableScroll();
    } else {
      dispatch(setBurger(false));
      enableScroll();
    }
  };

  return (
    <header className="header fixed-block">
      <div className="container">
        <div className="header__inner">
          <Logo classNames={'header__logo'} />
          <div className="header__burger-outer">
            <nav className={clsx('header__nav', { active: burger })}>
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link link link-ul-h link-ul"
                    to={'/'}
                    sectionId={'about'}
                    onBurger={onBurger}
                  >
                    О нас
                  </Link>
                </li>
                <li className="header__nav-item">
                  {
                    <Link
                      className="header__nav-link link link-ul-h link-ul"
                      to={'/'}
                      sectionId={'team'}
                      onBurger={onBurger}
                    >
                      Наши специалисты
                    </Link>
                  }
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/clients"
                    className="header__nav-link link link-ul-h link-ul"
                    onBurger={onBurger}
                  >
                    {' '}
                    Наши пациенты
                  </Link>
                </li>
                <li className="header__nav-item">
                  {
                    <Link
                      className="header__nav-link link link-ul-h link-ul"
                      to={'/'}
                      sectionId={'price'}
                      onBurger={onBurger}
                    >
                      Прайс
                    </Link>
                  }
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/news"
                    className="header__nav-link link link-ul-h link-ul"
                    onBurger={onBurger}
                  >
                    {' '}
                    Новости
                  </Link>
                </li>
              </ul>
              <ul className="header__contacts">
                <li className="header__contacts-item">г. {city}</li>
                <li className="header__contacts-item">{address}</li>
                <li className="header__contacts-item">{tel_num}</li>
              </ul>
            </nav>
            <button
              className={clsx('header__burger', { active: burger })}
              onClick={() => windowWidth < 1170 && onBurger()}
            >
              <span className="header__burger-line"></span>
            </button>
          </div>
          <Link className="header__btn-link" to="tel:87713521203">
            <MyBtn className="header__btn btn btn-bg">{tel_num}</MyBtn>
          </Link>
          <ScrollToSection />
        </div>
      </div>
    </header>
  );
};

export default Header;

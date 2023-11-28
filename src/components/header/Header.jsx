import './Header.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import MyBtn from '@components/_ui/btn/MyBtn';
import Logo from '@components/logo/Logo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { headerSel, setBurger } from '@store/slices/header/headerSlice';
import { clsx } from 'clsx';
import useWindowWidth from '@hooks/windowWidth';
import { metaSel } from '@store/slices/meta/metaSlice';

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

  const onBurger = () => {
    dispatch(setBurger(!burger));
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
                  {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#about');
                        windowWidth < 1170 && onBurger();
                      }}
                      className="header__nav-link link link-ul-h link-ul"
                    >
                      О нас
                    </div>
                  ) : (
                    <ScrollLink
                      to={'about'}
                      offset={-50}
                      duration={500}
                      smooth
                      spy
                      className="header__nav-link link link-ul-h link-ul"
                      onClick={() => {
                        windowWidth < 1170 && onBurger();
                      }}
                    >
                      О нас
                    </ScrollLink>
                  )}
                </li>
                <li className="header__nav-item">
                  {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#team');
                        windowWidth < 1170 && onBurger();
                      }}
                      className="header__nav-link link link-ul-h link-ul"
                    >
                      Наши специалисты
                    </div>
                  ) : (
                    <ScrollLink
                      to="team"
                      offset={-50}
                      duration={500}
                      smooth
                      spy
                      className="header__nav-link link link-ul-h link-ul"
                      onClick={() => {
                        windowWidth < 1170 && onBurger();
                      }}
                    >
                      {' '}
                      Наши специалисты
                    </ScrollLink>
                  )}
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/clients"
                    className="header__nav-link link link-ul-h link-ul"
                    onClick={() => {
                      windowWidth < 1170 && onBurger();
                    }}
                  >
                    {' '}
                    Наши пациенты
                  </Link>
                </li>
                <li className="header__nav-item">
                  {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#price');
                        windowWidth < 1170 && onBurger();
                      }}
                      className="header__nav-link link link-ul-h link-ul"
                    >
                      Прайс
                    </div>
                  ) : (
                    <ScrollLink
                      to="price"
                      offset={-50}
                      duration={500}
                      smooth
                      spy
                      className="header__nav-link link link-ul-h link-ul"
                      onClick={() => {
                        windowWidth < 1170 && onBurger();
                      }}
                    >
                      {' '}
                      Прайс
                    </ScrollLink>
                  )}
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/news"
                    className="header__nav-link link link-ul-h link-ul"
                    onClick={() => {
                      windowWidth < 1170 && onBurger();
                    }}
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

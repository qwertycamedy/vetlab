import './Footer.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '@components/logo/Logo';
import { useSelector } from 'react-redux';
import { metaSel } from '@store/slices/meta/metaSlice';

const Footer = () => {
  const {city, address, tel_num} = useSelector(metaSel);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Logo classNames={'footer__logo'} />
          <nav className="footer__nav">
            <ul className="footer__nav-list contacts">
              <li className="footer__nav-item">
                <Link className="footer__nav-link">г. {city}</Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link">ул. {address}</Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link">{tel_num}</Link>
              </li>
            </ul>
            <ul className="footer__nav-list pages">
              <li className="footer__nav-item">
              {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#about');
                      }}
                      className="footer__nav-link link link-ul-h link-ul"
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
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      О нас
                    </ScrollLink>
                  )}
              </li>
              <li className="footer__nav-item">
                <Link to="/clients" className="footer__nav-link link link-ul-h">
                  Наши пациенты
                </Link>
              </li>
              <li className="footer__nav-item">
              {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#team');
                      }}
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      Наши специалисты
                    </div>
                  ) : (
                    <ScrollLink
                      to={'team'}
                      offset={-50}
                      duration={500}
                      smooth
                      spy
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      Наши специалисты
                    </ScrollLink>
                  )}
              </li>
            </ul>
            <ul className="footer__nav-list sections">
              <li className="footer__nav-item">
              {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#price');
                      }}
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      Прайс
                    </div>
                  ) : (
                    <ScrollLink
                      to={'price'}
                      offset={-50}
                      duration={500}
                      smooth
                      spy
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      Прайс
                    </ScrollLink>
                  )}
              </li>
              <li className="footer__nav-item">
              {location.pathname.length > 1 ? (
                    <div
                      onClick={() => {
                        navigate('/#reviews');
                      }}
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      Отзывы
                    </div>
                  ) : (
                    <ScrollLink
                      to={'reviews'}
                      offset={-50}
                      duration={500}
                      smooth
                      spy
                      className="footer__nav-link link link-ul-h link-ul"
                    >
                      Отзывы
                    </ScrollLink>
                  )}
              </li>
              <li className="footer__nav-item">
                <Link to="/news" className="footer__nav-link link link-ul-h">
                  Новости
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

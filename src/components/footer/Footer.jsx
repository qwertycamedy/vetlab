import './Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '@components/logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Logo classNames={'footer__logo'} />
          <nav className="footer__nav">
            <ul className="footer__nav-list contacts">
              <li className="footer__nav-item">
                <Link className="footer__nav-link">г. Усть-Каменогорск</Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link">ул. Калихан Ыскак 15</Link>
              </li>
              <li className="footer__nav-item">
                <Link className="footer__nav-link">8 771 352 12 03</Link>
              </li>
            </ul>
            <ul className="footer__nav-list pages">
              <li className="footer__nav-item">
                <Link to="/#about" className="footer__nav-link link link-ul-h">
                  О нас
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/clients" className="footer__nav-link link link-ul-h">
                  Наши пациенты
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/#team" className="footer__nav-link link link-ul-h">
                  Наши специалисты
                </Link>
              </li>
            </ul>
            <ul className="footer__nav-list sections">
              <li className="footer__nav-item">
                <Link to="/price" className="footer__nav-link link link-ul-h">
                  Прайс
                </Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/#reviews" className="footer__nav-link link link-ul-h">
                  Отзывы
                </Link>
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

import useWindowWidth from '@hooks/windowWidth';
import { useLocation, useNavigate } from 'react-router-dom';

const Link = ({ to, sectionId, onBurger, children, className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const headerHeight = 64;
  const windowWidth = useWindowWidth();

  const handleClick = (e) => {
    e.preventDefault();
    if (windowWidth < 1170) {
      onBurger();
    }
    if (location.pathname !== to) {
      navigate(to, { state: { sectionId: sectionId } });
      console.log(sectionId);
    } else {
      scrollToSection();
      console.log('hello');
    }
  };

  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;

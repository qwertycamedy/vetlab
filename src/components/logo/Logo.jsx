import { Link } from 'react-router-dom';

import img from '@assets/img/logo.png';

const Logo = ({ classNames, imgCl, ...props }) => {
  return (
    <Link className={`${classNames} logo`} to="/" {...props}>
      <img
        className={imgCl + 'logo-img'}
        src={img}
        width="153"
        height="80"
        alt="img"
      />
    </Link>
  );
};

export default Logo;

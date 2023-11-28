
import { Link } from 'react-router-dom';
import './NotFound.scss'

const NotFound = ({
  children,
  classNames,
  innerCl,
  title,
  titleCl,
  subtitle,
  subtitleCl,
  goBackNeed = false,
  ...props
}) => {
  return (
    <section className={`${classNames} notFound`} {...props}>
      <div className="container notFound__container">
        <div className={`notFound__inner ${innerCl}`}>
          {title && <h3 className={`notFound__title ${titleCl}`}>{title}</h3>}
          {subtitle && <p className={`notFound__subtitle ${subtitleCl}`}>{subtitle}</p>}
          {children}
          {goBackNeed && (
            <Link className="notFound__btn btn btn-bg" to={'/'}>
              Вернуться на главную
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotFound;

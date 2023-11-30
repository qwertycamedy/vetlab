import { formatDate } from '@hooks/formatDate';
import { Link } from 'react-router-dom';

const Item = ({ obj }) => {
  const createdAt = formatDate(obj?.created_at, true, true, true, false, false);
  return (
    <Link className="news__card" to={`/news/${obj?.slug}`}>
      <div className="news__card-info">
        <h4 className="news__card-title title">{obj?.title}</h4>
        <p
          className="news__card-text"
          dangerouslySetInnerHTML={{ __html: obj?.prologue }}
        />
        <div className="news__card-info-bot">
          <button className="news__card-btn btn btn-bg radius-mobile">
            Читать
          </button>
          <span className="news__card-date"> {createdAt} </span>
        </div>
      </div>
      <img
        className="news__card-img"
        loading="lazy"
        src={obj?.preview}
        width="367"
        height="360"
        alt="new"
      />
    </Link>
  );
};

export default Item;

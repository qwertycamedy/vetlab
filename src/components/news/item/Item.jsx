import { Link } from "react-router-dom"


const Item = ({obj}) => {
  return (
    <Link className="news__card" to={`/news/${obj?.id}`}>
      <div className="news__card-info">
        <h4 className="news__card-title title">{obj?.title}</h4>
        <p className="news__card-text">
         {obj?.text}
        </p>
        <div className="news__card-info-bot">
          <button className="news__card-btn btn btn-bg radius-mobile">
            Читать
          </button>
          <span className="news__card-date"> {obj?.date} </span>
        </div>
      </div>
      <img
        className="news__card-img"
        loading="lazy"
        src={obj?.img}
        width="367"
        height="360"
        alt="new"
      />
    </Link>
  )
}

export default Item
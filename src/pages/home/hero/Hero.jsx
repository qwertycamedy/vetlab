import MyBtn from '@components/_ui/btn/MyBtn';
import MySection from '@components/_ui/section/MySection';
import './Hero.scss';

import locImg from '@assets/img/location.png';
import lapaImg from '@assets/img/lapa.png';
import img from '@assets/img/animals.png';
import { useBookingModal } from '@hooks/bookingModal';
import { useResultModal } from '@hooks/resultModal';
import { useSelector } from 'react-redux';
import { metaSel } from '@store/slices/meta/metaSlice';

const Hero = () => {
  const { city, address, title, subtitle,appointment_time,appointment_time_treatment,tel_num } = useSelector(metaSel);

  const { onOpenBooking } = useBookingModal();
  const { onOpenResult } = useResultModal();

  return (
    <MySection classNames={'hero'} innerCl={'hero__inner'}>
      <div className="hero__top">
        <div className="hero__info">
          <div className="hero__location location">
            <img
              className="img"
              loading="lazy"
              src={locImg}
              width="25"
              height="25"
              alt="location"
            />
            <span>г. {city}</span>
          </div>
          <h1 className="hero__title title title-main">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__btn-outer">
            <MyBtn
              className="hero__btn btn btn-bg bookingModal__open"
              onClick={onOpenBooking}
            >
              Записаться на приём
            </MyBtn>
            <MyBtn
              className="hero__btn btn btn-br resultModal__open"
              onClick={onOpenResult}
            >
              Получить результаты
            </MyBtn>
          </div>
        </div>
        <div className="hero__img-outer">
          <img
            className="hero__img-lapa"
            loading="lazy"
            src={lapaImg}
            width="443"
            height="405"
            alt="lapa"
          />
          <img
            className="hero__img"
            loading="lazy"
            src={img}
            width="694"
            height="500"
            alt="animals"
          />
        </div>
      </div>
      <div className="hero__bot">
        <div className="hero__card-outer">
          <div className="hero__card">
            <p className="hero__card-key">Телефон:</p>
            <p className="hero__card-val">{tel_num}</p>
          </div>
          <div className="hero__card big">
            <p className="hero__card-key">Время работы:</p>
            <p className="hero__card-val">
              <span className="fw-400">приём врача по записи:</span>
              <br />
              {appointment_time}
              <br />
              <span className="fw-400">процедурный кабинет:</span>
              <br />
              {appointment_time_treatment}
            </p>
          </div>
          <div className="hero__card">
            <p className="hero__card-key">Адрес:</p>
            <p className="hero__card-val">
              г. {city},
              <br />
              {address}
            </p>
          </div>
        </div>
      </div>
    </MySection>
  );
};

export default Hero;

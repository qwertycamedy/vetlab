import MySection from '@components/_ui/section/MySection';
import './Team.scss';
import MyBtn from '@components/_ui/btn/MyBtn';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

import img from '@assets/img/team-big.png';
import { useState } from 'react';
import { clsx } from 'clsx';

const slides = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

const Team = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveSlide(swiper.activeIndex);
    };

  return (
    <MySection classNames={'team'} innerCl={'team__inner'} id='team'>
      <h3 className="team__title title title-section">Наши специалисты</h3>
      <div className="team__slider-outer slider-outer">
        <Swiper
          className="team__slider slider swiper"
          modules={[EffectCoverflow]}
          effect={'coverflow'}
          speed={500}
          slidesPerView={'auto'}
          centeredSlides={true}
          grabCursor={true}
          wrapperClass="team__slider-wrapper slider-wrapper"
          coverflowEffect={{
            rotate: 0,
            stretch: -60,
            depth: 700,
            slideShadows: 0,
          }}
          breakpoints={{
            320: {
              spaceBetween: 20,
            },
            1170: {
              effect: false,
              spaceBetween: 10,
            },
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {slides.map((_, i) => (
            <SwiperSlide
              className={clsx(`team__slider-slide`, {'team__slider-slide-active': activeSlide === i})}
              key={i}
            >
              <div className="team__slider-content">
                <img
                  className="team__slider-img"
                  loading="lazy"
                  src={img}
                  width="446"
                  height="729"
                  alt="team"
                />
                <div className="team__slider-info">
                  <p className="team__slider-name title">Иванов Иван</p>
                  <ul className="team__slider-list">
                    <li className="team__slider-list-item">
                      Лучший специалист
                    </li>
                    <li className="team__slider-list-item">25 лет опыта</li>
                    <li className="team__slider-list-item">Стоматолог</li>
                    <li className="team__slider-list-item">4 образования</li>
                  </ul>
                  <MyBtn classNames="team__slider-btn btn-bg">
                    Записаться на приём
                  </MyBtn>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MyBtn classNames="team__common-btn btn-bg">Записаться на прием</MyBtn>
    </MySection>
  );
};

export default Team;

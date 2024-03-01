import MySection from '@components/_ui/section/MySection';
import './Team.scss';
import MyBtn from '@components/_ui/btn/MyBtn';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam, teamSel } from '@store/slices/team/teamSlice';
import { useBookingModal } from '@hooks/bookingModal';

const Team = () => {
  const dispatch = useDispatch();
  const { team } = useSelector(teamSel);
  const [activeSlide, setActiveSlide] = useState(0);
  const { onOpenBooking } = useBookingModal();

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  useEffect(() => {
    dispatch(getTeam());
  }, [dispatch]);

  return (
    <MySection classNames={'team'} innerCl={'team__inner'} id="team">
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
          {team?.map((obj, i) => (
            <SwiperSlide
              className={clsx(`team__slider-slide`, {
                'team__slider-slide-active': activeSlide === i,
              })}
              key={i}
            >
              <div className="team__slider-content">
                <img
                  className="team__slider-img"
                  loading="lazy"
                  src={obj.image}
                  width="446"
                  height="729"
                  alt="team"
                />
                <div className="team__slider-info">
                  <p className="team__slider-name title">{obj.name}</p>
                  <ul className="team__slider-list">
                    {obj.specifications.map((item, i) => (
                      <li className="team__slider-list-item" key={i}>
                        {item.specification}
                      </li>
                    ))}
                  </ul>
                  <MyBtn
                    classNames="team__slider-btn btn-bg"
                    onClick={onOpenBooking}
                  >
                    Записаться на приём
                  </MyBtn>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MyBtn classNames="team__common-btn btn-bg" onClick={onOpenBooking}>
        Записаться на прием
      </MyBtn>
    </MySection>
  );
};

export default Team;

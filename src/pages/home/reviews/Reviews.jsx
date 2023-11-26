import MySection from '@components/_ui/section/MySection';
import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

import img from '@assets/img/review.jpg';

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Reviews = () => {
  return (
    <MySection classNames={'reviews'} innerCl={'reviews__inner'}>
      <h3 className="reviews__title title title-section">Отзывы</h3>
      <div className="reviews__slider-outer slider-outer">
        <Swiper
          className="reviews__slider slider swiper"
          speed={500}
          grabCursor={true}
          wrapperClass="reviews__slider-wrapper slider-wrapper"
          breakpoints={{
            320: {
              centeredSlides: true,
              slidesPerView: 'auto',
              spaceBetween: 10,
            },
            1170: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 55,
            }
          }}
        >
          {slides.map((_, i) => (
            <SwiperSlide className="reviews__slider-slide" key={i}>
              <div className="reviews__slider-content slider-slide">
                <img
                  className="reviews__slider-img"
                  loading="lazy"
                  src={img}
                  width="279"
                  height="520"
                  alt="reviews"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MySection>
  );
};

export default Reviews;

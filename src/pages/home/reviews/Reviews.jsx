import MySection from '@components/_ui/section/MySection';
import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

import { useDispatch, useSelector } from 'react-redux';
import { getReviews, reviewsSel } from '@store/slices/reviews/reviewsSlice';
import { useEffect } from 'react';

const Reviews = () => {
  const dispatch = useDispatch();
  const {reviews} = useSelector(reviewsSel);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch])
  
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
          {reviews?.map((obj, i) => (
            <SwiperSlide className="reviews__slider-slide" key={i}>
              <div className="reviews__slider-content slider-slide">
                <img
                  className="reviews__slider-img"
                  loading="lazy"
                  src={obj.image}
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

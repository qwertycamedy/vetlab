import MySection from '@components/_ui/section/MySection';
import './Services.scss';

import MyBtn from '@components/_ui/btn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getServices, servicesSel } from '@store/slices/services/servicesSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector(servicesSel);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <MySection classNames={'services'} innerCl={'services__inner'} id={'price'}>
      <h3 className="services__title title title-section">Услуги</h3>
      <div className="services__card-outer">
        {
          services?.map(obj => (
            <div className="services__card" key={obj.id} style={{background: `${obj.color} !important`, width: obj.width}}>
              <p className="services__card-title title">{obj.title}</p>
              <img
                className="services__card-img"
                loading="lazy"
                src={obj.preview}
                width="150"
                height="150"
                alt="img"
              />
              <Link to={`/price/${obj.slug}`}>
              <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
              </Link>
            </div>
          ))
        }
      </div>
    </MySection>
  );
};

export default Services;

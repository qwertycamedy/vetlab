import MySection from '@components/_ui/section/MySection';
import './Services.scss'

import img from '@assets/img/services-1.png';
import MyBtn from '@components/_ui/btn/MyBtn';

const Services = () => {
  return (
    <MySection classNames={'services'} innerCl={'services__inner'}>
    <h3 className="services__title title title-section">Услуги</h3>
    <div className="services__card-col">
      <div className="services__card-row">
        <div className="services__card one bg-green-dark">
          <p className="services__card-title title">Вакцинация</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
        <div className="services__card two bg-blue-light">
          <p className="services__card-title title">Стоматология</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
      </div>

      <div className="services__card-row">
        <div className="services__card three bg-green-dark">
          <p className="services__card-title title">Стоматология</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
        <div className="services__card four bg-blue-light">
          <p className="services__card-title title">Вакцинация</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
        <div className="services__card five bg-green-dark">
          <p className="services__card-title title">Стоматология</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
      </div>

      <div className="services__card-row">
        <div className="services__card six bg-green-dark">
          <p className="services__card-title title">Стоматология</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
        <div className="services__card seven bg-blue-light">
          <p className="services__card-title title">Вакцинация</p>
          <img
            className="services__card-img"
            loading="lazy"
            src={img}
            width="150"
            height="150"
            alt="img"
          />
          <MyBtn classNames="services__card-btn btn-br">Прайс</MyBtn>
        </div>
      </div>
    </div>
    </MySection>
  );
};

export default Services;

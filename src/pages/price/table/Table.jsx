import MySection from '@components/_ui/section/MySection';
import React from 'react';


const Table = ({priceList}) => {
  return (
    <MySection classNames={'price'} innerCl={'price__inner'}>
      <h1 className="price__title title title-section">Вакцинация</h1>
      <div className="price__table">
        <div className="price__table-head">
          <span className="price__table-head-name">Наименование услуги</span>
          <span className="price__table-head-price">Стоимость</span>
        </div>
        <div className="price__table-body">
          {priceList?.map((obj, i) => (
            <div className="price__table-item" key={i}>
              <span className="price__table-name">{obj.service_name}</span>
              <span className="price__table-price">{obj.cost}</span>
            </div>
          ))}
        </div>
      </div>
    </MySection>
  );
};

export default Table;

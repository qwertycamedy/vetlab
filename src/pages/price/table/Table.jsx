import MySection from '@components/_ui/section/MySection';
import React from 'react';

const Table = ({ title, priceList }) => {
  console.log(priceList);
  return (
    <MySection classNames={'price'} innerCl={'price__inner'}>
      <h1 className="price__title title title-section">{title}</h1>
      <table className="price__table">
        <thead className="price__table-head">
          <tr className="price__table-row price__table-head-row">
            <td className="price__table-head-name price__table-name price__table-head-item">
              Наименование услуги
            </td>
            <td className="price__table-head-price price__table-price price__table-head-item">
              Стоимость
            </td>
            <td className="price__table-head-type price__table-type price__table-head-item">
              Запись/<br/>Живая очередь
            </td>
          </tr>
        </thead>
        <tbody className="price__table-body">
          {priceList?.map((obj, i) => (
            <tr className="price__table-row" key={i}>
              <td className="price__table-name price__table-name price__table-item">
                {obj.service_name}
              </td>
              <td className="price__table-price price__table-price price__table-item">
                {obj.cost}
              </td>
              <td className="price__table-type price__table-type price__table-item">
                {obj.type_appointment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MySection>
  );
};

export default Table;

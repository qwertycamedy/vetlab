import MySection from '@components/_ui/section/MySection';

import img from '@assets/img/client.png';

const Items = () => {
  const clients = [1, 2, 3, 5, 6, 7];
  return (
    <MySection classNames={'clients'} innerCl={'clients__inner'}>
      <h1 className="clients__title title title-section">Наши пациенты</h1>
      <div className="clients__card-outer">
        {clients?.map((client, i) => (
          <div className="clients__card" key={i}>
            <img
              className="clients__card-img"
              loading="lazy"
              src={img}
              width="305"
              height="260"
              alt="cli"
            />
          </div>
        ))}
      </div>
    </MySection>
  );
};

export default Items;

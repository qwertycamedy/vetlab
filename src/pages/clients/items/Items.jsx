import MySection from '@components/_ui/section/MySection';

const Items = ({ clients }) => {
  return (
    <MySection classNames={'clients'} innerCl={'clients__inner'}>
      <h1 className="clients__title title title-section">Наши пациенты</h1>
      <div className="clients__card-outer">
        {clients?.map((client, i) => (
          <div className="clients__card" key={i}>
            <img
              className="clients__card-img"
              loading="lazy"
              src={client.image}
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

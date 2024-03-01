import MySection from '@components/_ui/section/MySection';
import { formatDate } from '@hooks/formatDate';

const Story = ({ newstory }) => {
  const createdAt = formatDate(
    newstory?.created_at,
    true,
    true,
    true,
    false,
    false,
  );

  return (
    <MySection classNames={'newstory'} innerCl={'newstory__inner'}>
      <h1 className="newstory__title title title-section">Новости</h1>
      <div className="newstory__block">
        <img
          className="newstory__block-img"
          loading="lazy"
          src={newstory?.preview}
          width="367"
          height="360"
          alt="img"
        />
        <div className="newstory__block-info">
          <h3 className="newstory__block-title title">{newstory?.title}</h3>
          <p
            className="newstory__block-text"
            dangerouslySetInnerHTML={{ __html: newstory?.description }}
          />
          <span className="newstory__block-date">{createdAt}</span>
        </div>
      </div>
    </MySection>
  );
};

export default Story;

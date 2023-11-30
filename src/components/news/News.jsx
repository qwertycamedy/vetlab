import MySection from '@components/_ui/section/MySection';
import './News.scss'
import Item from './item/Item';

const News = ({title='Новости', news}) => {
 
  return (
    <MySection classNames={'news'} innerCl={'news__inner'}>
      <h1 className="news__title title title-section">{title}</h1>
      <div className="news__card-outer">
        {
            news?.map(obj => (
                <Item obj={obj} key={obj.id} />
            ))
        }
      </div>
    </MySection>
  )
}

export default News
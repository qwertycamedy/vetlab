import MySection from '@components/_ui/section/MySection';
import cl from './Pagination.module.scss';
import MyBtn from '@components/_ui/btn/MyBtn';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { setCurPage } from '@store/slices/news/newsSlice';

const Pagination = ({ curPage, prev, next }) => {
  const dispatch = useDispatch();

  const onChangePage = (n) => {
    dispatch(setCurPage(n));
    window.scrollTo(0, 0);
  };

  return (
    <MySection classNames={cl.section} innerCl={cl.inner}>
      <div className={cl.pag}>
        {prev && (
          <MyBtn
            classNames={clsx(cl.btn + ' btn-br', {
              [cl.btn__disabled]: prev === null,
            })}
            onClick={() => onChangePage(Number(curPage) - 1)}
          >
            {'<'}
          </MyBtn>
        )}
        <MyBtn classNames={cl.curPage + ` ${cl.btn} ${cl.btn__disabled}`}>
          {curPage}
        </MyBtn>
        {next && (
          <MyBtn
            classNames={clsx(cl.btn + ' btn-br', {
              [cl.btn__disabled]: next === null,
            })}
            onClick={() => onChangePage(Number(curPage) + 1)}
          >
            {'>'}
          </MyBtn>
        )}
      </div>
    </MySection>
  );
};

export default Pagination;

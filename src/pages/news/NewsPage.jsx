import MyPage from '@components/_ui/page/MyPage';
import Breadcrumbs from '@components/breadcrumbs/Breadcrumbs';
import News from '@components/news/News';
import Pagination from '@components/news/pagination/Pagination';
import { getNews, newsSel, setCurPage } from '@store/slices/news/newsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, curPage, prev, next } = useSelector(newsSel);
  const navigate = useNavigate();

  useEffect(() => {
    const { page } = qs.parse(window.location.search.substring(1));
    console.log(page);
    if(page !== undefined) {
      dispatch(setCurPage(page));
    } else {
      dispatch(setCurPage(1));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNews({ curPage }));
    const params = { page: curPage };
    const queryString = qs.stringify(params);
    navigate(`?${queryString}`);
  }, [dispatch, curPage, navigate]);

  return (
    <MyPage metaTitle="Новости" metaDescr="новости ВетЛаб">
      <Breadcrumbs />
      <News news={news} />
      <Pagination curPage={curPage} prev={prev} next={next} />
    </MyPage>
  );
};

export default NewsPage;

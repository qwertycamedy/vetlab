import MyPage from '@components/_ui/page/MyPage';
import './PricePage.scss';
import Table from './table/Table';
import Services from '@components/services/Services';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getService, servicesSel } from '@store/slices/services/servicesSlice';
import { useEffect } from 'react';

const PricePage = () => {
  const {slug} = useParams();
  const dispatch = useDispatch();
  const {service} = useSelector(servicesSel);
  
  useEffect(() => {
    dispatch(getService({slug}))
  }, [dispatch, slug]);

  return (
    <MyPage metaTitle="Прайслист" metaDescr="прайслист ВетЛаб">
      <Table title={service?.title} priceList={service?.pricelist} />
      <Services />
    </MyPage>
  );
};

export default PricePage;

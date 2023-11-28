import MyPage from '@components/_ui/page/MyPage';
import './PricePage.scss';
import Table from './table/Table';
import Services from '@components/services/Services';
import { useParams } from 'react-router-dom';

const PricePage = () => {
  const {slug} = useParams();

  
  return (
    <MyPage metaTitle="Прайслист" metaDescr="прайслист ВетЛаб">
      <Table />
      <Services />
    </MyPage>
  );
};

export default PricePage;

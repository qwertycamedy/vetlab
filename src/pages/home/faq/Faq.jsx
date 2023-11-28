import MySection from '@components/_ui/section/MySection';
import './Faq.scss';
import { useEffect, useState } from 'react';
import Item from './item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { faqSel, getFaq } from '@store/slices/faq/faqSlice';

const Faq = () => {
  const dispatch = useDispatch();
  const {faq} = useSelector(faqSel);
  const [curAcc, setCurAcc] = useState(null);

  useEffect(() => {
    dispatch(getFaq());
  }, [dispatch]);
  
  useEffect(() => {
    if(faq === null) {return}
    setCurAcc(faq[0]);
  }, [faq]);

  const onAcc = (cur) => {
    if (curAcc === cur) {
      setCurAcc(null);
    } else {
      setCurAcc(cur);
    }
  };

  return (
    <MySection classNames={'faq'} innerCl={'faq__inner'}>
      <h3 className="faq__title title title-section">
        Часто задаваемые вопросы
      </h3>
      <div className="faq__acc-outer">
        {faq?.map((acc) => (
          <Item acc={acc} curAcc={curAcc} key={acc.id} onAcc={onAcc} />
        ))}
      </div>
    </MySection>
  );
};

export default Faq;

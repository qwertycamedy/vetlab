import { clsx } from 'clsx';
import { useRef } from 'react';

const Item = ({ acc, curAcc, onAcc }) => {
  const itemRef = useRef(null);

  return (
    <div
      className={clsx('faq__acc', { active: acc?.id === curAcc?.id })}
      onClick={() => onAcc(acc)}
    >
      <button className="faq__acc-btn">{acc.title}</button>
      <div
        className="faq__acc-content"
        style={
          curAcc === acc
            ? { maxHeight: itemRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
        dangerouslySetInnerHTML={{ __html: acc?.description }}
        ref={itemRef}
        />
    </div>
  );
};

export default Item;

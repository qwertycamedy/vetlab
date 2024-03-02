import MyBtn from '@components/_ui/btn/MyBtn';
import MyForm from '@components/_ui/form/MyForm';
import MyInput from '@components/_ui/input/MyInput';
import MyModal from '@components/_ui/modal/MyModal';
import TelInput from '@components/telInput/TelInput';
import { useResultModal } from '@hooks/resultModal';
import {
  getResults,
  getVerCode,
  resultSel,
  setTelInput,
  setVerificationCode,
} from '@store/slices/result/resultSlice';
import { useDispatch, useSelector } from 'react-redux';

const ResultModal = () => {
  const dispatch = useDispatch();
  const {
    telInput,
    phoneModal,
    codeModal,
    downloadModal,
    results,
    verificationCode,
  } = useSelector(resultSel);
  const { onCloseResult, resultModal } = useResultModal();

  const onFurther = () => {
    const cleanedPhoneNumber = telInput.replace(/\D/g, '');
    console.log(cleanedPhoneNumber);
    if (cleanedPhoneNumber.length === 11) {
      dispatch(getVerCode({ phone: cleanedPhoneNumber }));
    }
  };

  const onResult = () => {
    const cleanedPhoneNumber = telInput.replace(/\D/g, '');
    dispatch(
      getResults({
        bodyParams: {
          phone: cleanedPhoneNumber,
          verification_code: verificationCode,
        },
      }),
    );
  };

  console.log(results);

  return (
    <MyModal modalIsOpen={resultModal} closeModal={onCloseResult}>
      <MyForm classnames={'modal__form'}>
        <div className="modal__form-content">
          {phoneModal && (
            <TelInput telInput={telInput} setTelInput={setTelInput} />
          )}
          {codeModal && (
            <MyInput
              title={'Код верификации'}
              value={verificationCode}
              setValue={setVerificationCode}
            />
          )}

          {downloadModal && (
            <div className="flex flex-col gap-8">
              {results?.map((res, i) => (
                <a
                  className="modal__form-link link link-accent"
                  href={res.file_path}
                  target='_blank'
                  key={res.id}
                >
                  <span>
                    {res.animal_name}: {res.file_path}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {phoneModal && (
          <MyBtn
            classNames={'modal__btn btn-bg'}
            onClick={onFurther}
            type="button"
          >
            Получить код
          </MyBtn>
        )}
        {codeModal && (
          <MyBtn
            classNames={'modal__btn btn-bg'}
            type="button"
            onClick={onResult}
          >
            Получить результаты
          </MyBtn>
        )}
      </MyForm>
    </MyModal>
  );
};

export default ResultModal;

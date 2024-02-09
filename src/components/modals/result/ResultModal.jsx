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
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const ResultModal = () => {
  const dispatch = useDispatch();
  const { telInput, further, verificationCode } = useSelector(resultSel);
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
    ).then((action) => {
      const results = action.payload.results?.map((item) => item.file_path);

      if(results) {
        results.forEach((file_path) => {
          axios
            .get(`http://vetlab-back.tech-tester.ru${file_path}`, {
              responseType: 'blob',
            })
            .then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('target', '_blank');
              link.setAttribute('download', 'filename.pdf');
              document.body.appendChild(link);
              link.click();
              link.parentNode.removeChild(link);
            })
            .catch((error) => console.error('Error downloading PDF:', error));
        });
      } else {
        alert("Результаты по данному номеру не найдены")
      }
        
      onCloseResult();
    });
  };

  return (
    <MyModal modalIsOpen={resultModal} closeModal={onCloseResult}>
      <MyForm classnames={'modal__form'} onSubmit={onResult}>
        <div className="modal__form-content">
          {!further ? (
            <TelInput telInput={telInput} setTelInput={setTelInput} />
          ) : (
            <MyInput
              title={'Код верификации'}
              value={verificationCode}
              setValue={setVerificationCode}
            />
          )}
        </div>

        {!further ? (
          <MyBtn
            classNames={'modal__btn btn-bg'}
            onClick={onFurther}
            type="button"
          >
            Получить код
          </MyBtn>
        ) : (
          <MyBtn classNames={'modal__btn btn-bg'} type="submit">
            Получить результаты
          </MyBtn>
        )}
      </MyForm>
    </MyModal>
  );
};

export default ResultModal;

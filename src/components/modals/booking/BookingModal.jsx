import MyBtn from '@components/_ui/btn/MyBtn';
import MyCheckbox from '@components/_ui/checkbox/MyCheckbox';
import MyForm from '@components/_ui/form/MyForm';
import MyInput from '@components/_ui/input/MyInput';
import MyModal from '@components/_ui/modal/MyModal';
import MySelect from '@components/_ui/select/MySelect';
import { useBookingModal } from '@hooks/bookingModal';
import {
  bookingSel,
  setDateInput,
  setNameInput,
  setServiceOptSel,
  setTeamOptSel,
  setTelInput,
  setTermsChecked,
  setTimeInput,
} from '@store/slices/booking/bookingSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const BookingModal = () => {
  const {
    serviceOptions,
    serviceOptSel,
    teamOptions,
    teamOptSel,
    termsChecked,
    dateInput,
    timeInput,
    nameInput,
    telInput,
  } = useSelector(bookingSel);
  const { onCloseBooking, bookingModal } = useBookingModal();
  const [further, setFurther] = useState(false);

  const onFurther = () => {
    if (
      dateInput !== '' &&
      timeInput !== '' &&
      serviceOptSel !== null &&
      teamOptSel !== null
    ) {
      setFurther(true);
    }
  };

  return (
    <MyModal modalIsOpen={bookingModal} closeModal={onCloseBooking}>
      <MyForm classnames={'modal__form'}>
        <div className="modal__form-content">
          {!further ? (
            <>
              <MySelect
                title={'Услуга'}
                options={serviceOptions}
                placeholder={'Выберите из списка'}
                selected={serviceOptSel}
                setSelected={setServiceOptSel}
              />
              <MySelect
                title={'Специалист'}
                options={teamOptions}
                placeholder={'Выберите из списка'}
                selected={teamOptSel}
                setSelected={setTeamOptSel}
              />
              <MyInput
                title={'Дата'}
                type="date"
                required={true}
                value={dateInput}
                setValue={setDateInput}
              />
              <MyInput
                title={'Время'}
                type="time"
                required={true}
                value={timeInput}
                setValue={setTimeInput}
              />
            </>
          ) : (
            <>
              <MyInput
                title={'Ваше имя'}
                placeholder={'Введите имя*'}
                required={true}
                value={nameInput}
                setValue={setNameInput}
              />
              <MyInput
                title={'Номер телефона'}
                placeholder={'+7 777 777 77 77'}
                required={true}
                value={telInput}
                setValue={setTelInput}
              />
              <MyCheckbox
                required={true}
                isChecked={termsChecked}
                setIsChecked={setTermsChecked}
              />
            </>
          )}
        </div>
        {!further ? (
          <MyBtn
            classNames={'bookingModal__submit modal__btn btn-bg'}
            onClick={onFurther}
          >
            Далее
          </MyBtn>
        ) : (
          <MyBtn
            classNames={'bookingModal__submit modal__btn btn-bg'}
            type="submit"
          >
            Записаться на прием
          </MyBtn>
        )}
      </MyForm>
    </MyModal>
  );
};

export default BookingModal;

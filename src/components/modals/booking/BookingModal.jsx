import MyBtn from '@components/_ui/btn/MyBtn';
import MyCheckbox from '@components/_ui/checkbox/MyCheckbox';
import MyForm from '@components/_ui/form/MyForm';
import MyInput from '@components/_ui/input/MyInput';
import MyModal from '@components/_ui/modal/MyModal';
import MySelect from '@components/_ui/select/MySelect';
import { useBookingModal } from '@hooks/bookingModal';
import {
  bookAppointment,
  bookingSel,
  getAvailableTime,
  setDateInput,
  setNameInput,
  setServiceOptSel,
  setTeamOptSel,
  setTelInput,
  setTermsChecked,
  setTimeOptSel,
} from '@store/slices/booking/bookingSlice';
import { servicesSel } from '@store/slices/services/servicesSlice';
import { teamSel } from '@store/slices/team/teamSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TelInput from '@components/telInput/TelInput';

const BookingModal = () => {
  const dispatch = useDispatch();

  const {
    serviceOptSel,
    teamOptSel,
    timeSlots,
    timeOptSel,
    termsChecked,
    dateInput,
    timeInput,
    nameInput,
    telInput,
  } = useSelector(bookingSel);
  const { services } = useSelector(servicesSel);
  const { team } = useSelector(teamSel);

  const { onCloseBooking, bookingModal } = useBookingModal();
  const [further, setFurther] = useState(false);

  const onFurther = () => {
    if (
      dateInput !== '' &&
      timeInput !== '' &&
      serviceOptSel !== null &&
      teamOptSel !== null
    ) {
      dispatch(
        getAvailableTime({
          queryParams: {
            date: dateInput,
            serviceId: serviceOptSel.id,
            specialistId: teamOptSel.id,
          },
        }),
      ).then(() => {
        setFurther(true);
      });
    }
  };

  // {
  //   "name_client": "Fedor Novikovvv",
  //   "phone_number": "77714555532",
  //   "service_id": 1,
  //   "specialist_id": 1,
  //   "date_appointment": "2024-01-30",
  //   "time_slot": "11:30",
  //   "data_processing_consent": true
  // }

  const onBook = () => {
    const cleanedPhoneNumber = telInput.replace(/\D/g, '');
    dispatch(
      bookAppointment({
        bodyParams: {
          name_client: nameInput,
          phone_number: cleanedPhoneNumber,
          service_id: serviceOptSel.id,
          specialist_id: teamOptSel.id,
          date_appointment: dateInput,
          time_slot: timeOptSel,
          data_processing_consent: termsChecked,
        },
      }),
    ).then(() => {
      alert(
        'Ваша заявка пришла к нам на рассмотрение. Наши специалисты скоро с Вами свяжутся!',
      );
    });
  };

  console.log(nameInput, telInput);

  const onChangeService = (e) => {
    const value = e.target.value;
    const newOptSel = services.find((item) => item.title === value);

    dispatch(setServiceOptSel(newOptSel));
  };

  const onChangeTeam = (e) => {
    const value = e.target.value;
    const newOptSel = team.find((item) => item.name === value);

    dispatch(setTeamOptSel(newOptSel));
  };
  const onChangeTime = (e) => {
    const value = e.target.value;
    const newOptSel = timeSlots.find((item) => item === value);
    console.log(newOptSel);
    dispatch(setTimeOptSel(newOptSel));
  };

  return (
    <MyModal modalIsOpen={bookingModal} closeModal={onCloseBooking}>
      <MyForm classnames={'modal__form'} onSubmit={onBook}>
        <div className="modal__form-content">
          {!further ? (
            <>
              <MySelect
                title={'Услуга'}
                options={services}
                placeholder={'Выберите из списка'}
                selected={serviceOptSel}
                onChange={onChangeService}
              />
              <MySelect
                title={'Специалист'}
                options={team}
                placeholder={'Выберите из списка'}
                selected={teamOptSel}
                onChange={onChangeTeam}
              />
              <MyInput
                title={'Дата'}
                type="date"
                required={true}
                value={dateInput}
                setValue={setDateInput}
              />
            </>
          ) : (
            <>
              <MySelect
                title={'Время'}
                options={timeSlots}
                placeholder={
                  timeSlots ? 'Выберите из списка' : 'Нет времени на запись'
                }
                selected={timeOptSel}
                onChange={onChangeTime}
              />
              <MyInput
                title={'Ваше имя'}
                placeholder={'Введите имя*'}
                required={true}
                value={nameInput}
                setValue={setNameInput}
              />
              <TelInput telInput={telInput} setTelInput={setTelInput} />
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
            type="button"
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

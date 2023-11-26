import MyBtn from "@components/_ui/btn/MyBtn";
import MyForm from "@components/_ui/form/MyForm";
import MyInput from "@components/_ui/input/MyInput";
import MyModal from "@components/_ui/modal/MyModal"
import { useResultModal } from "@hooks/resultModal";


const ResultModal = () => {
  const {onCloseResult, resultModal} = useResultModal();
  return (
    <MyModal modalIsOpen={resultModal} closeModal={onCloseResult}>
      <MyForm classnames={'modal__form'}>
      <div className="modal__form-content">
      <MyInput title={'Номер телефона'} placeholder={'+7 777 777 77 77'}  />
      </div>
      <MyBtn classNames={'modal__btn btn-bg'}>Получить результаты</MyBtn>
      </MyForm>
    </MyModal>
  )
}

export default ResultModal
import MyInput from "@components/_ui/input/MyInput";
import { useMask } from "@react-input/mask";


const TelInput = ({telInput, setTelInput}) => {
    const telInputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });
  return (
    <MyInput
      ref={telInputRef}
      title={'Номер телефона'}
      placeholder="+7 (777) 777-77-77"
      required={true}
      value={telInput}
      setValue={setTelInput}
    />
  )
}

export default TelInput
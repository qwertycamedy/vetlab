import MyPage from "@components/_ui/page/MyPage"
import Items from "./items/Items"
import './ClientsPage.scss';
import { useDispatch, useSelector } from "react-redux";
import { clientsSel, getClients } from "@store/slices/clients/clientsSlice";
import { useEffect } from "react";


const ClientsPage = () => {
  const dispatch = useDispatch();
  const {clients} = useSelector(clientsSel);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch])

  return (
    <MyPage metaTitle='Клиенты' metaDescr='клиенты ВетЛаб'>
      <Items clients={clients} />
    </MyPage>
  )
}

export default ClientsPage
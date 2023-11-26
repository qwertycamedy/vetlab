import MyPage from "@components/_ui/page/MyPage"
import Items from "./items/Items"
import './ClientsPage.scss';


const ClientsPage = () => {
  return (
    <MyPage metaTitle='Клиенты' metaDescr='клиенты ВетЛаб'>
      <Items />
    </MyPage>
  )
}

export default ClientsPage
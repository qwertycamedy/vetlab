import MyPage from "@components/_ui/page/MyPage"
import './NewstoryPage.scss'
import Story from "./story/Story"
import Similar from "./similar/Similar"


const NewstoryPage = () => {
  return (
    <MyPage metaTitle='Новость' metaDescr='новость ВетЛаб'>
      <Story />
      <Similar />
    </MyPage>
  )
}

export default NewstoryPage
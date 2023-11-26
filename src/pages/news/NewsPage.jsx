import MyPage from "@components/_ui/page/MyPage"
import News from "@components/news/News"


const NewsPage = () => {
  return (
    <MyPage metaTitle='Новости' metaDescr='новости ВетЛаб'>
      <News />
    </MyPage>
  )
}

export default NewsPage
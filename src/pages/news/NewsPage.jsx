import MyPage from "@components/_ui/page/MyPage"
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs"
import News from "@components/news/News"
import { getNews, newsSel } from "@store/slices/news/newsSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const NewsPage = () => {
  const dispatch = useDispatch()
  const {news} = useSelector(newsSel);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch])

  return (
    <MyPage metaTitle='Новости' metaDescr='новости ВетЛаб'>
      <Breadcrumbs />
      <News news={news} />
    </MyPage>
  )
}

export default NewsPage
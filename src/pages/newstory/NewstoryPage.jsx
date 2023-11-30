import MyPage from "@components/_ui/page/MyPage"
import './NewstoryPage.scss'
import Story from "./story/Story"
import Similar from "./similar/Similar"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNewstory, newsSel } from "@store/slices/news/newsSlice"
import Breadcrumbs from "@components/breadcrumbs/Breadcrumbs"


const NewstoryPage = () => {
  const {slug} = useParams();
  const dispatch = useDispatch();
  const {newstory} = useSelector(newsSel);

  useEffect(() => {
    dispatch(getNewstory({slug}))
  }, [dispatch, slug]);

  return (
    <MyPage metaTitle='Новость' metaDescr='новость ВетЛаб'>
      <Breadcrumbs lastCrumbVal={newstory?.title} />
      <Story newstory={newstory}/>
      <Similar />
    </MyPage>
  )
}

export default NewstoryPage
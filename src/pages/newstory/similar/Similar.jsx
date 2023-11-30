import News from '@components/news/News'
import { getNews, newsSel } from '@store/slices/news/newsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Similar = () => {
  const dispatch = useDispatch()
  const {news} = useSelector(newsSel);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch])


  return (
    <News title='Также может быть интересно' news={news} />
  )
}

export default Similar
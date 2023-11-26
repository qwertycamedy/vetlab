import MyPage from "@components/_ui/page/MyPage"
import Hero from "./hero/Hero"
import About from "./about/About"
import Faq from "./faq/Faq"
import Team from "./team/Team"
import Services from "../../components/services/Services"
import Reviews from "./reviews/Reviews"


const HomePage = () => {
  return (
    <MyPage metaTitle='ВетЛаб' metaDescr='главная ВетЛаб'>
        <Hero />
        <About />
        <Team />
        <Services />
        <Reviews />
        <Faq />
    </MyPage>
  )
}

export default HomePage
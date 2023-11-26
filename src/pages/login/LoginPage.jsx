import MyPage from '@components/_ui/page/MyPage';
import MySection from '@components/_ui/section/MySection';
import './LoginPage.scss'

const LoginPage = () => {
  return (
    <MyPage metaTitle="Аутентификация" metaDescr="аутентификация ВетЛаб">
      <MySection classNames={'login'} innerCl={'login__inner'}>
        <div className="login__block">
          <h1 className="login__title title title-section">Вход в кабинет</h1>

          <form className="login__form" action="#">
            <input
              className="login__input input"
              type="text"
              required
              placeholder="Номер телефона"
            />
            <input
              className="login__input input"
              type="text"
              required
              placeholder="SMS пароль"
            />

            <button className="login__btn btn btn-bg" type="submit">
              Войти
            </button>
          </form>
        </div>
      </MySection>
    </MyPage>
  );
};

export default LoginPage;

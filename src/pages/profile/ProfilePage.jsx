import MyPage from '@components/_ui/page/MyPage';
import MySection from '@components/_ui/section/MySection';
import { Link } from 'react-router-dom';
import './ProfilePage.scss'

const ProfilePage = () => {
  return (
    <MyPage metaTitle="Личный кабинет" metaDescr="Личный кабинет ВетЛаб">
      <MySection classNames={'profile'} innerCl={'profile__inner'}>
        <h1 className="profile__title title title-section">Личный кабинет</h1>
        <div className="profile__side-content">
          <div className="profile__side">
            <div className="profile__side-item">
              <div className="profile__side-title">ФИО хозяина</div>
              <div className="profile__side-user">Иванов Иван</div>
            </div>
            <div className="profile__side-item">
              <div className="profile__side-title">Питомец</div>
              <Link to={'#'} className="profile__side-pet link">
                Собака Шарик
              </Link>
              <Link to={'#'} className="profile__side-pet link active">
                Кот Василий
              </Link>
              <Link to={'#'} className="profile__side-pet link">
                Попугай Кеша
              </Link>
            </div>
          </div>
          <div className="profile__content">
            <div className="profile__pet-name">Кот Василий</div>
            <div className="profile__pet-info">
              <div className="profile__pet-col">
                <div className="profile__pet-item">
                  <div className="profile__pet-key">Дата рождения</div>
                  <div className="profile__pet-val">10.05.2022</div>
                </div>
                <div className="profile__pet-item">
                  <div className="profile__pet-key">Порода</div>
                  <div className="profile__pet-val">Бенгальский кот</div>
                </div>
                <div className="profile__pet-item">
                  <div className="profile__pet-key">Пол</div>
                  <div className="profile__pet-val">Мужской</div>
                </div>
              </div>
              <div className="profile__pet-col">
                <div className="profile__pet-reception">
                  <div className="profile__pet-key">Приём</div>
                  <div className="profile__pet-val">21.07.2023</div>
                  <div className="profile__pet-val">
                    15.09.2023
                    <Link
                      to={'#'}
                      target="_blank"
                      className="profile__pet-btn btn btn-bg"
                    >
                      Скачать PDF файл с результатом
                    </Link>
                  </div>
                  <div className="profile__pet-val">01.10.2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MySection>
    </MyPage>
  );
};

export default ProfilePage;

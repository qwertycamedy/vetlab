import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import ClientsPage from '@pages/clients/ClientsPage';
import HomePage from '@pages/home/HomePage';
import NewsPage from '@pages/news/NewsPage';
import NewstoryPage from '@pages/newstory/NewstoryPage';
import PricePage from '@pages/price/PricePage';
import LoginPage from '@pages/login/LoginPage';
import ProfilePage from '@pages/profile/ProfilePage';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BookingModal from '@components/modals/booking/BookingModal';
import ResultModal from '@components/modals/result/ResultModal';

const App = () => {
  const location = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="site-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:uId" element={<NewstoryPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BookingModal />
      <ResultModal />
      <Footer />
    </div>
  );
};

export default App;

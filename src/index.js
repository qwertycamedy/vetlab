import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@store/store';

import "@assets/styles/_vars.scss";
import "@assets/styles/_fonts.scss";
import "@assets/styles/_settings.scss";
import "@assets/styles/_other.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

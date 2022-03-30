import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import './index.css';
// import { editPublication } from 'components/Service/api-service';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-progect/">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

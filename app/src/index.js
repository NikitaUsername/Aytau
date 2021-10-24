
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import 'moment/locale/ru';
import reportWebVitals from './reportWebVitals';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import moment from 'moment';

moment.locale('ru');

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <App style={{ height: '100%' }} />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

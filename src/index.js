import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import { Provider } from 'react-redux';
import store from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer
          theme='dark'
          position='top-right'
          autoClose={5000}
          closeOnClick
          pauseOnHover={false}
        />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);


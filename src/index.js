import React from 'react';
import ReactDOM from 'react-dom';
import StaffContextProvider from './components/shared/staffContext';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
          <StaffContextProvider>
              <App />
          </StaffContextProvider>
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
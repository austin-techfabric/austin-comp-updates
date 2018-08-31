import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from './components/shared/Context';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
// </BrowserRouter>
// , document.getElementById('root'));
// registerServiceWorker();

registerServiceWorker();
const render = Component => {
    return ReactDOM.render(
        <BrowserRouter>
          <ContextProvider>
              <Component />
          </ContextProvider>
        </BrowserRouter>
      ,
      document.getElementById('root')
    );
  };
  
  render(App);
  
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      render(NextApp);
    });
  }
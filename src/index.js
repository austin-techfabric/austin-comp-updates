import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from './components/shared/Context';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { AppContainer } from 'react-hot-loader';

const render = () => {
  ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
          <ContextProvider>
              <App />
          </ContextProvider>
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

// registerServiceWorker();
// const render = Component => {
//     return ReactDOM.render(
//         <BrowserRouter>
//           <ContextProvider>
//               <Component />
//           </ContextProvider>
//         </BrowserRouter>
//       ,
//       document.getElementById('root')
//     );
//   };
  
//   render(App);
  
//   if (module.hot) {
//     module.hot.accept('./App', () => {
//       const NextApp = require('./App').default;
//       render(NextApp);
//     });
//   }
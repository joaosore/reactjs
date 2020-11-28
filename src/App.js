import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routers';
import GlobalStyle from './components/Global/Styled';

import store from './store';

import Audio from './components/Audio';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        {/* <Audio /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;

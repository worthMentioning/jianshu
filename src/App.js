import React from 'react';
import { GlobalStyle } from './style';
import Header from './common/header';
import {Provider} from 'react-redux'
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Header></Header>       
     </Provider>
    </div>
  );
}

export default App;

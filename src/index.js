import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


// put the component generated html into the DOM
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
      </Provider>
  , document.querySelector('.container'));
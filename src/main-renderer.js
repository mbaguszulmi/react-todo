import React from 'react';
import { Provider } from "react-redux";
import configureStore from './states/store';
import App from './ui/App';
const store = configureStore();

export const appRender = () => (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

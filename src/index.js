import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter
} from "react-router-dom";
import { PostContext, PostContextProvider } from './Context/PostContext';
import { AuthContextProvider } from './Context/AuthContext';
import store, {persistor} from './Redax/Store';
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/React';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostContextProvider>
        <AuthContextProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </AuthContextProvider>
      </PostContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

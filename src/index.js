import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './index.module.css';
import Modal from './components/Modal/Modal';
import { ContextWrapper } from './components/AppContext/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <div> 
      <ContextWrapper> 
        <App />
        <Modal />
      </ContextWrapper>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
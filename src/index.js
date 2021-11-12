import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './index.module.css';
import Modal from './components/Modal/Modal';
import { ContextWrapper } from './components/AppContext/AppContext';
import eventBus from './utils/EventBus'

eventBus.on('openArticle', () => {
  console.log('open article')
})

ReactDOM.render(
  <React.StrictMode>
    <div> 
      <ContextWrapper> 
        <App />
        <Modal/>
      </ContextWrapper>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
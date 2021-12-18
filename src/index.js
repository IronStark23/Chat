import React from 'react';
import ReactDOM from 'react-dom';
import ChatProvider from './context/ChatProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
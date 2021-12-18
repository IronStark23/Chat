import React from 'react';
import { ChatContext } from './context/ChatProvider';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

const App = () => {

  const {usuario} = React.useContext(ChatContext)

  return usuario.activo !== null ? (
      <div className='container'>
          <Navbar />
          {
              usuario.activo ? (
                  <Chat/>
              ) : (
                  <div className='text-center mt-5 lead'>
                      <br/>
                      <p>Click en acceder para iniciar chat</p>
                      <img src="./chat.jpg" class="img-fluid" alt="chat image"></img>
                      
                  </div>
              )
          }
      </div>
  ) : (<div>Cargando...</div>)
}

export default App
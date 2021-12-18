import React from 'react';
import { ChatContext } from '../context/ChatProvider';

const Navbar = () => {

    const {usuario, iniciarSesion, cerrarSesion} = React.useContext(ChatContext)

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top p-2 container">
            <span className="navbar-brand">Proyecto Chat</span>
            <div>
                {
                    usuario.activo ? (
                        <button 
                            className="btn btn-outline-light my-2 my-sm-0" 
                            onClick={cerrarSesion}
                        >
                            Salir
                        </button>
                    ) : (
                        <button className="btn btn-outline-light my-2 my-sm-0" onClick={iniciarSesion} >
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
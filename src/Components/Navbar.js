import React from 'react';
import userimg from './imgComponents/logo-user.jpg';
function Navbar() {
  return (
    <div className="bar-navigation-menu">
        <img className="imagen" alt="imagen no disponible" src={userimg}/>
        <div className="lateral-bar">
        <nav>
          <ul>
            <li><a href="localhost">DashBoard</a></li>
            <li><a href="localhost">Estadisticas Telefonicas</a></li>
            <li><a href="localhost">Capacitadores</a></li>
            <li><a href="localhost">Graficas</a></li>
            <li><a href="localhost">Catalogo de Cursos</a></li>
          </ul>
        </nav>
        </div>

    </div>
  );
}

export default Navbar;

import { Fragment } from "react";
import './estilos/Menu.css'


function Menu(){
    
    return (
        <>


    <header className="menu">
      <div className="menu-logo">
        <img src="/logoM.png" alt="Logo" className="logo-image" /> {/* Asegúrate de tener esta imagen en la carpeta public */}
      </div>
      <nav className="menu-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>


        </>
    );
}

export default Menu;
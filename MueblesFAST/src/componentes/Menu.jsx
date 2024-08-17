import { Fragment } from "react";
import logo from './img/logoM.JPG'


function Menu(){
    
    return (
        <>
        
          <div class="menu">
        <img src={logo} alt="imagen"/>

        <nav>
          <a href="#">Quiénes Somos </a>
          <a href="#"> Tiendas</a>
          <a href="#"> Servicios</a>
          <a href="#"> Ofertas</a>
        </nav>
      </div>

        </>
    );
}

export default Menu;
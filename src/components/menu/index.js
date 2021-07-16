import React from 'react';
// import Logo from '';
import './Menu.css';


function Menu() {
    return(
        <nav className="Menu">
            <a href="/"> 
                 {/* <img className="Logo" src={Logo} alt="Logo da Alura"/>  */}
                 VAGUEL
                
             </a>
            <a className="Button" src="../../assets/img/" href="/">Contato</a>
           
            
        </nav>
    )
}
export default Menu;
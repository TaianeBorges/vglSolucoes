import "./App.css";
// import { render } from '@testing-library/react';
import React, { Component } from "react";
import Menu from "./components/menu/index";
import Map from "../src/components/map/index";
import {  DoneOutlineRounded, Email, Facebook, Instagram, Phone, SecurityOutlined, SettingsInputAntenna, SettingsInputComponentOutlined, SettingsInputHdmiOutlined} from "@material-ui/icons";
import Remote  from "./assets/img/monitoramento.jpeg";
import Presencial from  './assets/img/2.png'
import Rede from './assets/img/innov-edit.png';
import Grade from './components/Grade/index';
import parceirosImage from './assets/img/parceiros-svg.svg';








class App extends Component {
  render() {
    return (
      <div className="body">
        <Menu />
          <div className="header">
          <h1> Soluções de TI</h1>
          </div>
         
        
          <div className="section-contact">
            <div className="contact">
              <Phone/> 
              <p>Horário de atendimento:<br/>
                Segunda á Sábado, 8h ás 18h<br/> 
                (21)96566-4598
              </p>
            </div>

            <div className="contact">
              <Email  href="contato.avgtech@gmail.com"/>
              <p>Solicite orçamento atráves do nosso Email:<br/>
                vglsolucoes@gmail.com
              </p>
            </div>

            <div className="contact">
                <Instagram  ahref="http:instagram.com/lindolforh"/>
                <Facebook/>
                <p>Nos Acompanhe nas Redes Socias</p>
 
            </div>
          </div>


        <div className="services">
          <div className="suporte-remote">
            <img className="remote" src={Remote} alt=""/>
            <div className="text">
              <h1>Suporte Remoto</h1>
              
            <div className="line"></div>
              <p>Imprevistos acontecem e o que poderia levar muito tempo 
                para o deslocamento de suporte local, pode ser resolvido 
                de forma remota. <br/>
                Através do acesso remoto monitoramos:<br/>
                <DoneOutlineRounded/>Espaço de disco<br/>
                <DoneOutlineRounded/>Saúde de disco<br/>
                 <DoneOutlineRounded/>Uso de CPU<br/>
                   <DoneOutlineRounded/>Firewall<br/>
                   <DoneOutlineRounded/>uso de memória<br/>
                 <DoneOutlineRounded/>instalação de antivírus<br/>
                 <DoneOutlineRounded/>instalações e atualizações de sistema<br/>
                  
              </p>
            </div>
          </div>
          <div className="suporte-presencial">
            <img className="presencial" src={Presencial} alt=""/>
            <div className="text">
              <h1> Suporte Presencial?</h1>
            <div className="line"></div>
              <h2>o que está incluso?</h2>
              <Grade/>
          </div>
          </div>
          <div className="instalacao-rede">
            <img className="rede" src={Rede} alt=""/>
            <div className="text-rede">
              <h1>Rede</h1>
              <p>
                <SettingsInputComponentOutlined/> Desenvolvimento e Instalação de Rede Cabeamento Lógico Estruturado;<br/>
                <SettingsInputHdmiOutlined/>Instalação e Manutenção de Rede de Computadores<br/>
                <SettingsInputAntenna/> Switches,  Gateways, Bridges, Routers, Hubs<br/>
                <SecurityOutlined/>Configurações e Segurança de Rede<br/>
                   
                </p>
            </div>
          </div>
          <div className="cards">
            
            

          </div>
        
        
          <div className="aboutwe">
            {/* <img className="about" src={} alt=""/> */}
            <div className="text">
              <h1>QUEM SOMOS?</h1>
              <p>
                A VGL Soluções surgiu para trazer soluções de TI para sua empresa e casa,
                Aqui você encontra profissionais com mais de 10anos de experiência em TI, 
                Vamos usar todo nosso conhecimento para te ajudar no que for preciso, 
                entregamos qualidade em todo serviço prestado, desde um suporte remoto 
                até projetos de grande porte como instalação de Rede.
                Te convido a conferir os nossos parceiros.
              </p>
  
            </div>
          </div>
          </div>
         
         
            
          {/* </div>
          <div className="parceiros">
          <img className="parceirosImage" src={parceirosImage} alt=""/>
          </div> */}
       
        

          {/* <footer>
        <p>&copy; TAIDEV </p>
        </footer> */}
</div>
      
     
    );
  }
}

export default App;

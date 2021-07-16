import React from 'react';
import styled from  'styled-components';

// import { Container } from './styles';

const Btn = styled.a`
  display: flex;
  position: fixed;
  flex-direction: column;
  bottom:10px;
  right:10px;


img{
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 30px;
    background-color: transparent;
    border: none;
    box-shadow: 0 1px 5px rgba(0,0,0,.4);
    font-size: 24px;
    color: white;
      
    -webkit-transition: .2s ease-out;
    -moz-transition: .2s ease-out;
    transition: .2s ease-out;
  }

  @media (max-width: 800px){
      img{
          width: 3rem;
          height: 3rem;
      }
  }


  `

function btnFlut() {
  return (
      <Btn>
          <img className="zap" src="https://img.icons8.com/material-rounded/96/4a90e2/whatsapp--v5.png" alt="whatssap"/>
          <img className="instagram" src="https://img.icons8.com/ios-filled/100/4a90e2/instagram-new.png" alt="instagram"/>
          
      </Btn>
  )
}

export default btnFlut;
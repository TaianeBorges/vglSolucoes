import { Component } from 'react';
import styled from 'styled-components'


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-flex;
  align-self: center;
  font-family:  20px 'Montserrat', sans-serif;
  font-weight: bold;
  border-radius: 3px;
  padding: 1.0rem 05rem;
  /* margin: 1.5rem 05rem; */
  background: blueviolet ;
  opacity: 2 ;
  color: white;
  align-self: normal;
  align-items: center;
  /* border: 2px solid blue; */
  text-decoration: none;
  text-transform: uppercase;
  transition:all 0.3s ease;

  :hover{
    opacity: 0.8;
  }

  @media (max-width: 800px) {
 a.Button {
 position: fixed;
 left: 0;
 right: 0;
 bottom: 0;
 background: var(--primary);
 border-radius: 0;
 border: 0;
 text-align: center;
 }
} 
  
`
class Btn extends Component{
render(){
  return (
    <Button
    // <img src="https://img.icons8.com/officel/80/000000/whatsapp.png"/>
Img src="https://img.icons8.com/officel/80/000000/whatsapp.png"
href="https://github.com/styled-components/styled-components"
target="_blank"
rel="noopener"
primary>
contato
</Button>
  );
}
}


export default Btn;



  
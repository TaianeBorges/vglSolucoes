
import  {Component} from 'react';
import styled from 'styled-components';
import fundo from     '../../assets/img/1.png';



 const Container = styled.header`
 display: inline-flex;
 background-image: url('./assets/img//1.png');
  background-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(to top, transparent 5%, black 20%);
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;


 `


 const H1= styled.h1`
   /* margin:  15rem 10rem; */
  display: inline-flex;
  color: var(--white);
  text-align:flex-start;
   width: 40%;
   margin:  5rem;

 `
 
//  const Image = styled.image`
//  background-image:no-repeat url(${CaboRede});
//  align-items: flex-end;
//   flex-wrap: wrap;
//   max-width: 100%;
//   height: 50%;
   
  

//  `

class Header extends Component{
  

    render(){
        return(
        <div>

          <Container>
           {/* <img className="img" src={fundo} alt="suporte para computador"/> */}
         <H1> 
            Montagem,
            Manuteção
            serviços de informática
             personalizado!
          </H1>
          </Container>
        </div>        
        )
    }
}

export default Header;


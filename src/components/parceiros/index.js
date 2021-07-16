import React from  'react';
import Styled from 'styled-components';
import Parceiros from '../../assets/img/parceiros-svg.svg';


const Container=Styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 10rem;
background-color: var(--graylight);
color: var(--white);

`
const Image = Styled.image`
  width: 100%;
  height:20rem;

`


function parceiros() {
  return(

    <div>
        <Container>
            <Image  src={Parceiros} alt="cabo de rede"/>
        </Container>
    </div>


  )
  
  
}

export default parceiros;
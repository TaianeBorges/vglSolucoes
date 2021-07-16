// import { Email } from '@material-ui/icons';
import { Component } from 'react';
import styled from 'styled-components';

const Form = styled.div`
display: flex;
flex-direction: column;
width: 50%;
flex-wrap: wrap;
background-color: #2125;
color: #ffff;
align-items: flex-start;
height: 100px;


`

const Input = styled.input`
background-color: blue;
color: #ffff;

// `
// const Text = styled.input`
// background-color: #fff;
// color: #000;
// align-items: flex-start;


// `


const Mensagem = styled.textarea`
background-color: #fff;
color: #000;
border-radius: 10px;
` 

class formcontact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Digite sua mensagem",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  // handleinputChange(event){
  //     const target = event.target;
  //     const name = target.name;
  //     const mensagem = target.mensagem;
  // }
  handleSubmit(event) {
    alert("Sua mensagem foi enviada!! ");
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {/* <label>
          Nome:
          <br/>
          <Text
            Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label> */}
        
        <label>
          Mensagem:
          <br/>
          <Mensagem
            textarea
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <Input type="submit" value="Enviar" />
      </Form>
    );
  }
}
export default formcontact;


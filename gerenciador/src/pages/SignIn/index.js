import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/doctor.svg";

import { Form, Container } from "./styles";

class SignIn extends Component {
  render() {
    return (
      <Container>
        <Form>
          <img src={Logo} alt="logo" />          
          <input
            type="email"
            placeholder="Endereço de e-mail"
          />
          <input
            type="password"
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
          <Link to="/reinicio_senha">Esqueci minha senha</Link>
          <hr />
          <Link to="/credenciamento">Credenciamento</Link>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
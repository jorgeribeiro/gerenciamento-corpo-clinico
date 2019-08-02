import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Logo from "../../assets/doctor.svg";

import { Form, Container } from "./styles";

const options = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'feminino', label: 'Feminino' },
];

class Credenciamento extends Component {
  notify = () => toast("Wow so easy !");
  render() {
    return (
      <Container>
        <Form>
          <img src={Logo} alt="logo" />          
          <input
            type="text"
            placeholder="Nome e sobrenome"
          />          
          <select>
              <option>Masculino</option>
              <option>Feminino</option>
              </select>            
          <input
            type="text"
            placeholder="Data de nascimento"
          />
          <input
            type="text"
            placeholder="Endereço"
          />
          <input
            type="text"
            placeholder="Cidade - Estado"
          />
          <input
            type="text"
            placeholder="Telefone celular"
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
          />          
          <input
            type="password"
            placeholder="Senha"
          />
          <button type="submit">Finalizar credenciamento</button>
          <hr />
          <Link to="/">Início</Link>
        </Form>
      </Container>
    );
  }
}

export default Credenciamento;
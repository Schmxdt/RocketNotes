import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis</p>

        <h2>Faca seu login</h2>

        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />
        <Link to="/register">Criar Conta</Link>
      </Form>
    </Container>
  );
}

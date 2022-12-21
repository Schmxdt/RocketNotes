import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React.js" />
        </li>
        <li>
          <ButtonText title="Node.js" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "Rocket" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar Notas
      </NewNote>
    </Container>
  );
}

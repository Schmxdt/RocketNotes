import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introducao ao React</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            tenetur ipsum, minus quia libero corporis cupiditate atque nisi
            porro facilis praesentium necessitatibus quo maiores assumenda, sunt
            temporibus, autem esse omnis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum tenetur ipsum, minus quia
            libero corporis cupiditate atque nisi porro facilis praesentium
            necessitatibus quo maiores assumenda, sunt temporibus, autem esse
            omnis.
          </p>
          <Section title="Links uteis">
            <Links>
              <li>
                <a href="">https://rocketseat.com.br/</a>
              </li>
              <li>
                <a href="">https://rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

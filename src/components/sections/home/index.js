import { Container, Title } from '../../global';
import { Logo, Marked } from './styles';

export default function Home() {
  return (
    <Container>
      <Logo alt="Fernandes logo" />
      <Title>
        <Marked href="https://github.com/marcusv77/nextjs-template">
          NextJs
        </Marked>{' '}
        template
      </Title>
    </Container>
  );
}

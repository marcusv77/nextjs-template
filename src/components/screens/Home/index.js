import {Container} from '../../global';
import {Logo, Marked} from './styles';
import {Title} from '../../global';

export default function Home() {
  return (
    <Container>
      <Logo />
      <Title><Marked href={'https://github.com/marcusv77/nextjs-template'}>NextJs</Marked> template</Title>
    </Container>
  );
}

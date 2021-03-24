import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Container, Title } from '../../global';
import { Marked } from './styles';
import logo from '../../../public/assets/home/logo.png';

export default function Home() {
  return (
    <Container>
      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={100}
        layout="intrinsic"
      />
      <Title>
        <Marked href="https://github.com/marcusv77/nextjs-template">
          NextJs
        </Marked>{' '}
        template
      </Title>

      <Typewriter
        options={{
          strings: ['Created by:', 'Marcus Fernandes'],
          autoStart: true,
          loop: true,
        }}
      />
    </Container>
  );
}

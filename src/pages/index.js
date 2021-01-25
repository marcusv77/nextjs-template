import Head from 'next/head';
import {Container} from '../components/global';
import Home from '../components/screens/Home';

export default function Index() {
  return (
    <Container>
      <Head>
        <title>Fernandes - NextJs Template</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home />
      
    </Container>
  );
}

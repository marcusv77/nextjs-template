import Head from 'next/head';
import favicon from '../public/favicon.ico';
import {Container} from '../components/global';
import Home from '../components/screens/Home';

export default function Index() {
  return (
    <Container>
      <Head>
        <title>Fernandes - NextJs Template</title>
        <link rel='icon' href={favicon} />
      </Head>

      <Home />
      
    </Container>
  );
}

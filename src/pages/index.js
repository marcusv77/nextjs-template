import Head from 'next/head';
import { Container } from '../components/global';
import Home from '../sections/home';

export default function Index() {
  const title = 'Fernandes - NextJs Template';
  const description = 'NextJs template for your projects.';
  const keywords = 'nextjs, next, reactjs, react, template, web, seo';

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home />
    </Container>
  );
}

import Head from 'next/head';
import favicon from '../public/favicon.ico';
import {Container} from '../components/global';

import Home from '../components/sections/home';

export default function Index() {
  const title = "Fernandes - NextJs Template";
  const description = "NextJs template for your projects.";
  const keywords = "nextjs, next, reactjs, react, template, web, seo";

  return (
    <Container>
      <Head>
        <link rel='icon' href={favicon} />
        <title>{title}</title>
        <meta 
          name="decription"
          content={description}
        />
        <meta 
          name="keywords"
          content={keywords}
        />
      </Head>

      <Home />
      
    </Container>
  );
}

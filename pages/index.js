import Head from 'next/head';

import Header from '../components/Header';
import Tutorial from '../components/Tutorial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Sorteios</title>
        <meta name="description" content="Super Sorteios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Tutorial />
        <p>Super Sorteios</p>
      </main>
      <footer></footer>
    </>
  )
}

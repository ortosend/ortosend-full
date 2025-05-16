import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>OrtoSend</title>
      </Head>
      <main>
        <h1>Bienvenido a OrtoSend</h1>
        <nav>
          <Link href='/login'>Acceso Clínicas</Link> | 
          <Link href='/admin'>Acceso Fabricante</Link>
        </nav>
      </main>
    </div>
  );
}
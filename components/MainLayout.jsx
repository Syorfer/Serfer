import Head from 'next/head';
import Footer from './Footer/Footer';
import Header from './Header';

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | Sёrfer</title>
        <meta name='keywords' content='Sёrfer,next,javascript,nextjs,react' />
        <meta name='description' content='Sёrfer for next' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

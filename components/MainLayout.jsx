import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | Sёrfer</title>
        <meta name="keywords" content="Sёrfer,next,javascript,nextjs,react" />
        <meta name="description" content="Sёrfer for next" />

      </Head>
      <Header />
      {/* <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
      </nav> */}
      <main>
        {children}
      </main>

    </>
  )
}
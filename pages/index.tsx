/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UCOCAMP</title>
        <meta name="description" content="UCOCAMP landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="heroBackground"></div>
        <div className="hero">
          <a>
            <h1><img src="/logo.png" alt="Logo" />COCAMP</h1>
          </a>
          <h2>Complementa tu formación con cursos 100% online</h2>
		      <br></br>
		      <button className='loginButton'><Link href="/homepage">&nbsp;&nbsp;&nbsp;¡Empieza ahora!&nbsp;&nbsp;&nbsp;</Link></button>
        </div>
      </main>
    </div>
  )
}

export default Home

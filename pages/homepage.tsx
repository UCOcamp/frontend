/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UCOCamp</title>
        <meta name="description" content="UCOCamp landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <h1>Homepage</h1>
        <button className='loginButton'><Link href="/">&nbsp;&nbsp;&nbsp;Salir&nbsp;&nbsp;&nbsp;</Link></button>
        <button className='loginButton'><Link href="/course">&nbsp;&nbsp;&nbsp;Curso&nbsp;&nbsp;&nbsp;</Link></button>
        <button className='loginButton'><Link href="/profile">&nbsp;&nbsp;&nbsp;Perfil&nbsp;&nbsp;&nbsp;</Link></button>
      </main>
    </div>
  )
}

export default Home

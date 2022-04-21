/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UCOCamp</title>
        <meta name="description" content="UCOCamp landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main>
        <h1>Perfil</h1>
      <button className='loginButton'><Link href="/homepage">&nbsp;&nbsp;&nbsp;Mis cursos&nbsp;&nbsp;&nbsp;</Link></button>
      <button className='loginButton'><Link href="/">&nbsp;&nbsp;&nbsp;Salir&nbsp;&nbsp;&nbsp;</Link></button>
      </main>
    </div>
  )
}

export default Home

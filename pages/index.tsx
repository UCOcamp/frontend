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
            <h1><img src="/logoLargo.png" alt="Logo"/></h1>
          </a>
          <h2>Complementa tu formación con cursos 100% online</h2>
		      <br></br>
          <div style={{color:"#ffff"}}>
            <button className='loginButton'><Link href="/registerPage">&nbsp;&nbsp;&nbsp;Regístrate&nbsp;&nbsp;&nbsp;</Link></button>
            <a>&nbsp;&nbsp;</a>
  		      <button className='loginButton'><Link href="/loginPage">&nbsp;&nbsp;&nbsp;Inicia Sesión&nbsp;&nbsp;&nbsp;</Link></button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

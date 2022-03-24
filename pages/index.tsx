/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UCOCamp</title>
        <meta name="description" content="UCOCamp landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="heroBackground"></div>
        <div className="hero">
          <a href="https://github.com/UCOcamp" target="_blank" rel="noopener noreferrer">
            <h1><img src="/logo.png" alt="Logo" />COCAMP</h1>
          </a>
          <h2> Work in progress... </h2>
          {/**<BsChevronDoubleDown className="dropDown"/>*/}
        </div>
      </main>
    </div>
  )
}

export default Home

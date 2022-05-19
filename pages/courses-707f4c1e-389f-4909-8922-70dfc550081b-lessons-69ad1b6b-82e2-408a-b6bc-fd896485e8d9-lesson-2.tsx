import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const router = useRouter();
  const { course } = router.query;
  return (
    <div>
      <Head>
        <title>UCOCamp</title>
        <meta name="description" content="UCOCamp landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main>
        <div className="hero">
          <h1>Tipos de test</h1>
          <br></br>
          <ReactPlayer url='https://ucocamp-courses.aulasoftwarelibre.uco.es/files/courses/tdd:testdrivendevelopment/4c2c1e73-5491-4398-b1dd-30253b311f75/lecci%C3%B3n1/lecci%C3%B3n1.mp4' controls={true} />
          <br></br>
          <button className='loginButton'><Link href="//courses-707f4c1e-389f-4909-8922-70dfc550081b-lessons-69ad1b6b-82e2-408a-b6bc-fd896485e8d9-lesson-3">&nbsp;&nbsp;&nbsp;Siguiente lección&nbsp;&nbsp;&nbsp;</Link></button>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
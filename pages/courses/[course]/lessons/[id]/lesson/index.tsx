import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../../../components/navbar/navbar";
import { Footer } from "../../../../components/footer/footer";
import ReactPlayer from "react-player";

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
        <br></br>
        <h1>Cursos {'>'} Lecciones {'>'} Lección 1</h1>
        <br></br>
        <ReactPlayer url='https://ucocamp-courses.aulasoftwarelibre.uco.es/files/courses/tdd:testdrivendevelopment/4c2c1e73-5491-4398-b1dd-30253b311f75/lecci%C3%B3n1/lecci%C3%B3n1.mp4' controls={true} />
      </main>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Home;

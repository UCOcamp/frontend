/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../../../components/navbar/navbar";
import { Footer } from "../../../../components/footer/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type LessonJSON = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  video: {
    url: string;
  };
};
type ContentBlockJSON = {
  id: string;
  title: string;
  description: string;
  lessons: LessonJSON[];
};

const Home: NextPage = () => {
  const router = useRouter();
  const { course } = router.query;

  const [contentBlocks, setContentBlocks] = useState<ContentBlockJSON[]>([]);
  useEffect(() => {
    const getContentBlocks = async () => {
      try {
        const coursesURL = "https://ucocamp-courses.aulasoftwarelibre.uco.es";
        const { data } = await axios.get(
          `${coursesURL}/course/${course}/content-blocks`
        );
        let cbsJSON: ContentBlockJSON[] = data;
        cbsJSON = cbsJSON.map((cb) => {
          cb.lessons = cb.lessons.map((lsn) => {
            lsn.thumbnailUrl = coursesURL + "/" + lsn.thumbnailUrl;
            lsn.video.url = lsn.title + "," + coursesURL + "/" + lsn.video.url;
            return lsn;
          });
          return cb;
        });
        setContentBlocks(cbsJSON);
      } catch (e) {
        console.error(e);
      }
    };
    getContentBlocks();
  }, [contentBlocks, course, setContentBlocks]);
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
        <h1> &nbsp; Cursos {">"} Lecciones</h1>
        <br></br>
        <section id="Speakers" className="Section Speakers centered">
          <div className="grid">
            {contentBlocks.map((cb) => {
              return cb.lessons.map((lsn) => {
                return (
                  <Link key={lsn.video.url} href={`/video`} passHref>
                    <div className="speakerCard">
                      <div className="Photo">
                        <img
                          src={lsn.thumbnailUrl}
                          alt={`Portada de la leccion ${lsn.title}`}
                        />
                      </div>
                      <div className="Label">
                        <h3>{lsn.title}</h3>
                        <p>{lsn.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              });
            })}
          </div>
        </section>
      </main>
      <br></br>
      <Footer />
    </div>
  );
};

export default Home;

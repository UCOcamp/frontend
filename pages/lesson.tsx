import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

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
        <h1>Cursos > Lecciones</h1>
        <br></br>
        <section id="Speakers" className="Section Speakers">
          <div className="grid">
            <div className="speakerCard">
              <div className="Photo">
                <img src="portada.jpg" alt="Foto de Eduardo Sánchez" />
              </div>
              <div className="Label">
                <h3>Lección 1</h3>
                <p>Descripción de la lección</p>
                <div className="RRSS">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/eduSatoe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/eduardosancheztoril/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="speakerCard">
              <div className="Photo">
                <img src="portada.jpg" alt="Foto de Paula García" />
              </div>
              <div className="Label">
                <h3>Lección 2</h3>
                <p>Descripción de la lección</p>
                <div className="RRSS">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/paula_g_phys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/paula-garc%C3%ADa-molina-538b86199/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="speakerCard">
              <div className="Photo">
                <img src="portada.jpg" alt="Foto de Ines Huertas" />
              </div>
              <div className="Label">
                <h3>Lección 3</h3>
                <p>Descripción de la lección</p>
                <div className="RRSS">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/quierodata"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ineshuertas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="speakerCard">
              <div className="Photo">
                <img src="portada.jpg" alt="Foto de David Bonilla" />
              </div>
              <div className="Label">
                <h3>Lección 4</h3>
                <p>Descripción de la lección</p>
                <div className="RRSS">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/david_bonilla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dbonillaf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="speakerCard">
              <div className="Photo">
                <img src="portada.jpg" alt="Foto de Carmen Ansio" />
              </div>
              <div className="Label">
                <h3>Lección 5</h3>
                <p>Descripción de la lección</p>
                <div className="RRSS">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/carmenansio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/carmenansio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="speakerCard">
              <div className="Photo">
                <img src="portada.jpg" alt="Foto de Carlos Buenosvinos" />
              </div>
              <div className="Label">
                <h3>Lección 6</h3>
                <p>Descripción de la lección</p>
                <div className="RRSS">
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/buenosvinos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/carlosbuenosvinos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fa fa-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Home;

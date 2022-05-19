/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


type CourseJSON = {
  title: string,
  description: string,
  thumbnailUrl: string,
  id: string,
}

const Home: NextPage = () => {
  const [courses, setCourses] = useState<CourseJSON[]>([])
  useEffect(() => {
    const getCourses = async () => {
      try {
        const coursesURL = 'https://ucocamp-courses.aulasoftwarelibre.uco.es';
        const { data } = await axios.get(`${coursesURL}/courses`)
        const coursesJSON: CourseJSON[] = new Array<CourseJSON>();
        data.map((course: CourseJSON) => {
          const courseJSON: CourseJSON = {
            title: course.title,
            description: course.description,
            thumbnailUrl: `${coursesURL}/${course.thumbnailUrl}`,
            id: course.id
          }
          coursesJSON.push(courseJSON)
        })
        setCourses(coursesJSON);
      } catch (e) {
        console.error(e)
      }      
    }
    getCourses();
  }, [courses, setCourses])
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
        <h1>&nbsp; Cursos</h1>
        <br></br>
        <section id="Speakers" className="Section Speakers centered">
          <div className="grid">
          {courses.map((course) => {
            return (
              <Link key={course.id} href={`/courses/${course.id}/lessons`} passHref>
                <div className="speakerCard" >
                  <div className="Photo">
                    <img src={course.thumbnailUrl} alt="Foto de Eduardo Sánchez" />
                  </div>
                  <div className="Label">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
        </section>
      </main>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Home;

/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UCOCamp</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="UCOCamp landing page" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="heroBackground"></div>
        <div className="hero">
          <div className="content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 contents">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="form-block">
                        <div className="mb-4">
                          <h3>
                            <h3>
                              Sign Up to <strong>UCOCAMP</strong>
                            </h3>
                          </h3>
                        </div>
                        <form action="#" method="post">
                          <div className="form-group first">
                            <label htmlFor="fname">Name:</label>
                            <br></br>
                            <input
                              type="fname"
                              className="form-control"
                              id="fname"
                            />
                          </div>
                          <div className="form-group first">
                            <label htmlFor="lname">Surname:</label>
                            <br></br>
                            <input
                              type="lname"
                              className="form-control"
                              id="lname"
                            />
                          </div>
                          <div className="form-group first">
                            <label htmlFor="email">Email:</label>
                            <br></br>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                            />
                          </div>
                          <div className="form-group first">
                            <label htmlFor="password">Password:</label>
                            <br></br>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                            />
                          </div>
                          <div className="form-group first">
                            <label htmlFor="password">Password:</label>
                            <br></br>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                            />
                          </div>
                          <br></br>
                          <input
                            type="submit"
                            value="Register"
                            className="btn btn-pill text-white btn-block btn-primary loginButton"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

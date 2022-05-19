/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Home: NextPage = () => {

  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [passwd, setPasswd] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  
  const onPasswdChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswd(e.currentTarget.value);
  };
  

  const preventDefault = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  }
  const Login = async () => {
    if (!email || !passwd) {
      setErrorMsg('Required params are missing!')
      return;
    }

    setErrorMsg('')

    const body = {
      mail: email,
      passwd: passwd
    }
    try {
      const response = await axios.post(`https://ucocamp-users.aulasoftwarelibre.uco.es/users/login`, body)
      if (response.status == 200) router.push('/homepage');
    } catch (e) {
      setErrorMsg('Login failed!')
      return;      
    }
  }

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
                          Log in to <strong>UCOCAMP</strong>
                          </h3>
                        </h3>
                        <p style={{color: "red"}}>{errorMsg}</p>
                        </div>
                        <form onSubmit={preventDefault}>
                        <div className="form-group first">
                            <label htmlFor="email">Email:</label>
                            <br></br>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              required={true}
                              onChange={onEmailChange}
                            />
                          </div>
                          <div className="form-group first">
                            <label htmlFor="password">Password:</label>
                            <br></br>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              required={true}
                              onChange={onPasswdChange}
                            />
                          </div>
                          <br></br>
                          <button className="btn btn-pill text-white btn-block btn-primary loginButton" onClick={Login}>
                            Login
                          </button>
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

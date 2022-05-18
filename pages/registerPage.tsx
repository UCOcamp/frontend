/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
const RegisterPage: NextPage = () => {

  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwd, setPasswd] = useState<string>('');
  const [confirmPasswd, setConfirmPasswd] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  
  const onSurnameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSurname(e.currentTarget.value);
  };
  
  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  
  const onPasswdChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswd(e.currentTarget.value);
  };
  
  const onConfirmPasswdChange = (e: React.FormEvent<HTMLInputElement>) => {
    setConfirmPasswd(e.currentTarget.value);
  };

  const Register = async () => {
    if (!name || !surname || !email || !passwd || !confirmPasswd) {
      setErrorMsg('Required params are missing!')
      return;
    }
    if (passwd !== confirmPasswd) {
      setErrorMsg('Passwords do not match!')
      return;
    }
    setErrorMsg('')

    const body = {
      name: name,
      surnames: surname,
      mail: email,
      passwd: passwd,
      role: "STUDENT"
    }

    try {
      const response = await axios.post(`https://ucocamp-users.aulasoftwarelibre.uco.es/users/register`, body)
      if (response.status == 201) router.push('/homepage');
    } catch (e) {
      setErrorMsg('Registration failed!')
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
                          Sign Up to <strong>UCOCAMP</strong>
                        </h3>
                        <p style={{color: "red"}}>{errorMsg}</p>
                        </div>
                        <form>
                          <div className="form-group first">
                            <label htmlFor="fname">Name:</label>
                            <br></br>
                            <input
                              type="fname"
                              className="form-control"
                              id="fname"
                              required={true}
                              onChange={onNameChange}
                            />
                          </div>
                          <div className="form-group first">
                            <label htmlFor="lname">Surname:</label>
                            <br></br>
                            <input
                              type="lname"
                              className="form-control"
                              id="lname"
                              required={true}
                              onChange={onSurnameChange}

                            />
                          </div>
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
                          <div className="form-group first">
                            <label htmlFor="password">Confirm Password:</label>
                            <br></br>
                            <input
                              type="password"
                              className="form-control"
                              id="password-confirmation"
                              required={true}
                              onChange={onConfirmPasswdChange}
                            />
                          </div>
                          <br></br>
                          <button className="btn btn-pill text-white btn-block btn-primary loginButton" onClick={Register}>
                            Register
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

export default RegisterPage;

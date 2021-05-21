import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import IPage from '../../interfaces/page';

const urlBack: string = 'https://immense-thicket-34329.herokuapp.com/commits/1';
const urlFront: string = 'https://immense-thicket-34329.herokuapp.com/commits/2';

const CommitsPage: React.FunctionComponent<IPage> = props => {
  const [backend, SetBackend] = useState<any>('');
  const [frontend, SetFrontend] = useState<any>('');

  useEffect(() => {
    axios
      .get(urlBack)
      .then((resp: any )=> SetBackend(resp.data))
      .catch((error: any) => console.log(error));

    axios
      .get(urlFront)
      .then((resp: any )=> SetFrontend(resp.data))
      .catch((error: any) => console.log(error));

    }, [])
    
    const backendArray = backend.dataArray;
    const frontendArray = frontend.dataArray;

  return (
    <div className="commist-container">
      <div className="card commits-header">
        <h1>Hello and Welcome to The Commits Page</h1>
        <p>Here you will find the commits for this project, both frontend and backend.</p>
      </div>
      <div className="cards-container d-flex">
        <div>
          <div className="card bg-light text-center">
            <h2 className="text-danger">Backend Commits</h2>
          </div>
          <div className="card bg-light elemns-container">
            <div className="card-body">
              {!!backendArray ? backendArray.map((elem: any) => (
                <div key={elem.commit.url} className="border-bottom pt-2 mt-2 elem-cont">
                  <div className="text-left">
                    <h5 className="text-primary">Author: {elem.commit.author.name}</h5>
                    <h6 className="text-secondary">Date: {elem.commit.author.date}</h6>
                    <h6 className="text-danger">Email: {elem.commit.author.email}</h6>
                  </div>
                  <p>Commit Message:</p>
                  <p>{elem.commit.message}</p>
                </div>
              )) : (
                <div className="card bg-light">
                  <h1>Something happens with the API!!</h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-light text-center">
            <h2 className="text-danger">Frontend Commits</h2>
          </div>
          <div className="card bg-light elemns-container">
            <div className="card-body">
              {!!frontendArray ? frontendArray.map((elem: any) => (
                  <div className="border-bottom pt-2 mt-2 elem-cont">
                    <div>
                      <h5 className="text-primary">Author: {elem.commit.author.name}</h5>
                      <h6 className="text-secondary">Date: {elem.commit.author.date}</h6>
                      <h6 className="text-danger">Email: {elem.commit.author.email}</h6>
                    </div>
                    <p>Commit Message:</p>
                    <p>{elem.commit.message}</p>
                  </div>
                )) : (
                  <div className="card bg-light">
                    <h1>Something happens with the API!!</h1>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary fw-bolder mt-4" to="/">Go Back!</Link>
      </div>
    </div>
  );
}

export default CommitsPage;

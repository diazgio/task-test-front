import React from 'react';
import IPage from '../../interfaces/page';
import { Link } from 'react-router-dom';

const HomePage: React.FunctionComponent<IPage> = props => {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to My App</h1>
      <Link className="btn btn-primary fw-bolder" to="/commits">Lets Start!</Link>
    </div>
  );
}

export default HomePage;

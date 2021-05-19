import React from 'react';
import IPage from '../../interfaces/page';
import { Link } from 'react-router-dom';

const HomePage: React.FunctionComponent<IPage> = props => {
  return (
    <div>
      <h1>Welcome to this app</h1>
      <Link className="btn btn-primary" to="/commits">Go!</Link>
    </div>
  );
}

export default HomePage;

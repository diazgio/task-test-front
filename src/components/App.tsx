import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from '../config/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

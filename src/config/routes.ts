import HomePage from '../components/Pages/Home';
import CommitsPage from '../components/Pages/Commits';
import IRoute from '../interfaces/route';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/commits',
    name: 'Commits Page',
    component: CommitsPage,
    exact: true,
  },
];

export default routes;
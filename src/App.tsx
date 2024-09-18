import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Login from './routes/Login/Login';
import Home from './routes/Home/Home';
import MovieDetail from './routes/MovieDetail/MovieDetail';
import Search from './routes/Search/Search';
import NotFound from './routes/NotFound/NotFound';

const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetail />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <main className='app'>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;

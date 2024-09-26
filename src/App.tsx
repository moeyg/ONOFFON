/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Login from './routes/Login/Login';
import Home from './routes/Home/Home';
import MovieDetail from './routes/MovieDetail/MovieDetail';
import Search from './routes/Search/Search';
import NotFound from './routes/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

const Layout: React.FC<{ user: any }> = ({ user }) => {
  const location = useLocation();

  if (!user && location.pathname !== '/') return <Navigate to='/' />;

  return (
    <>
      {location.pathname !== '/' && <Navigation />}
      <Outlet />
    </>
  );
};

const router = (user: any) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: user ? <Navigate to='home' /> : <Login /> },
        {
          path: 'home',
          element: user ? <Home /> : <Navigate to='/' />,
        },
        {
          path: 'movie/:movieId',
          element: user ? <MovieDetail /> : <Navigate to='/' />,
        },
        {
          path: 'search',
          element: user ? <Search /> : <Navigate to='/' />,
        },
      ],
    },
  ]);

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <main className='app'>
      <RouterProvider router={router(user)} />
    </main>
  );
};

export default App;

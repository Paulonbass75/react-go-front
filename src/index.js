import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Movies from './components/Movies';
import Categories from './components/Categories';
import EditMovies from './components/EditMovies';
import GraphQl from './components/GraphQl';
import Login from './components/Login';
import Movie from './components/Movie';

import ManageCatalogue from './components/ManageCatalogue';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Categories", element: <Categories /> },
      { path: "/Movies", element: <Movies /> },
      { path: "/Movies/:id", element: <Movies /> },
      { path: "/admin/addMovies/0", element: <EditMovies /> },
      { path: "/GraphQl", element: <GraphQl /> },
      { path: "/Login", element: <Login /> },
      { path: "/Admin", element: <ManageCatalogue /> },
      { path: "/Movie/:id", element: <Movie /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


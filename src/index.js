import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Items from './components/Items';
import Categories from './components/Categories';
import EditItems from './components/EditItems';
import GraphQl from './components/GraphQl';
import Login from './components/Login';
import Item from './components/Item';

import ManageCatalogue from './components/ManageCatalogue';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Categories", element: <Categories /> },
      { path: "/Items", element: <Items /> },
      { path: "/Items/:id", element: <Item /> },
      { path: "/admin/addItems/0", element: <EditItems /> },
      { path: "/GraphQl", element: <GraphQl /> },
      { path: "/Login", element: <Login /> },
      { path: "/Admin", element: <ManageCatalogue /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './components/routes/pages/home/Home';
import { BlackMovies } from './components/routes/pages/front/black movies/BlackMovies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "bm",
        element: <BlackMovies />
      }
    ]
  },
  {
   
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



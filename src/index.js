import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom'

import Home from './components/routes/pages/home/Home';
import App01 from './components/routes/pages/front/App01/App01';

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
        path: "App01",
        element: <App01 />
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



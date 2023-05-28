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
import { Cadastro } from './components/routes/pages/front/cadastro/Cadastro';
import { Cursos } from './components/routes/pages/front/cursos/Cursos';
import { GFBuscador } from './components/routes/pages/front/github buscador/GFBuscador';
import { Login } from './components/routes/pages/front/login/Login';
import { Spider } from './components/routes/pages/front/spider man/Spider';
import { Spotify } from './components/routes/pages/front/spotify/Spotify';
import { Wally } from './components/routes/pages/front/wally/Wally';

import { CursosBd } from './components/routes/pages/back/bd-cursos/CursosBd';
import { EcommerceBd } from './components/routes/pages/back/bd-ecommerce/EcommerceBd'
import { FilmesBd } from './components/routes/pages/back/bd-filmes/FilmesBd'
import { FuncionariosBd } from './components/routes/pages/back/bd-funcionários/FuncionariosBd'


const router = createBrowserRouter([
  {
    path: "/portifolio",
    element: <App />,
    children: [
      {
        path: "/portifolio",
        element: <Home />
      },
      {
        path: "/portifolio/black-movies",
        element: <BlackMovies />
      },
      {
        path: "/portifolio/cadastro",
        element: <Cadastro />
      },
      {
        path: "/portifolio/cursos",
        element: <Cursos />
      },
      {
        path: "/portifolio/github-finder",
        element: <GFBuscador />
      },
      {
        path: "/portifolio/login-page",
        element: <Login />
      },
      {
        path: "/portifolio/spider-man",
        element: <Spider />
      },
      {
        path: "/portifolio/spotify-clone",
        element: <Spotify />
      },
      {
        path: "/portifolio/wally",
        element: <Wally />
      },
      {
        path: "/portifolio/bd-funcionarios",
        element: <FuncionariosBd />
      },
      {
        path: "/portifolio/bd-cursos",
        element: <CursosBd />
      },
      {
        path: "/portifolio/bd-ecommerce",
        element: <EcommerceBd />
      },
      {
        path: "/portifolio/bd-filmes",
        element: <FilmesBd />
      },
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



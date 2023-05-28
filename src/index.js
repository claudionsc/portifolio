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
        path: "/",
        element: <Home />
      },
      {
        path: "black-movies",
        element: <BlackMovies />
      },
      {
        path: "cadastro",
        element: <Cadastro />
      },
      {
        path: "cursos",
        element: <Cursos />
      },
      {
        path: "github-finder",
        element: <GFBuscador />
      },
      {
        path: "login-page",
        element: <Login />
      },
      {
        path: "spider-man",
        element: <Spider />
      },
      {
        path: "spotify-clone",
        element: <Spotify />
      },
      {
        path: "wally",
        element: <Wally />
      },
      {
        path: "bd-funcionarios",
        element: <FuncionariosBd />
      },
      {
        path: "bd-cursos",
        element: <CursosBd />
      },
      {
        path: "bd-ecommerce",
        element: <EcommerceBd />
      },
      {
        path: "bd-filmes",
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



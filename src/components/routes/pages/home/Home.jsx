import React from 'react'

import { Link } from 'react-router-dom'
import { Skills } from '../../../sections/skills/Skills'
import { Projetos } from "../../../sections/projetos/Projetos"

function Home() {
  return (
    <div className='wrapper'>
      <div className='logo'>
        <Link to="/">nsc</Link>
      </div>

      <main>

        <section id="sec01">
          <div className="container">
            <h1>Claudio Nascimento</h1>
            <p>desenvolvimento web fullstack, design gráfico, marketing</p>
          </div>
        </section>

        <section id="sec02">
          <div className="container">
          <Skills />
          </div>

        </section>

        <section id="sec03">
          <div className="container">
            <Projetos />
          </div>
          
        </section>
        <section id="sec04">
          <div className="container">
            <h1>curriculo</h1>
            <p>Lorem ipsum</p>
          </div>
        </section>
        <section id="sec05">
          <div className="container">
            <h1>sobre</h1>
            <p>Lorem ipsum</p>
          </div>
        </section>

      </main>

    </ div>
  )
}

export default Home
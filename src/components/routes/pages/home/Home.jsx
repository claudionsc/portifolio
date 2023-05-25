import React from 'react'

import { Skills } from '../../../sections/skills/Skills'
import { Projetos } from "../../../sections/projetos/main/Projetos"
import Back from '../../../sections/projetos/back/Back'
import SkillsIcons from '../../../sections/skills/SkillsIcons'
import Contatos from '../../../sections/contatos/Contatos'

import nave from '../../../assets/img/home/nave.png'

function Home() {
  return (
    <div className='wrapper'>
      <main>
        <section id="sec01">
          <div className="container">
            <img src={nave}  />
            <h1>Claudio Nascimento</h1>
            <p>desenvolvimento web fullstack, design gráfico, marketing</p>
          </div>
        </section>

        <section id="sec02">
          <div className="container">
            <Skills />
            <SkillsIcons />
          </div>

        </section>

        <section id="sec03">
          <div className="container">
            <Projetos />
            <Back />
          </div>

        </section>
       
        <section id="sec04">
          <div className="container">
            <Contatos />
          </div>
        </section>

      </main>

    </ div>
  )
}

export default Home
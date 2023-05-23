import React from 'react'
import {RiComputerFill} from 'react-icons/ri'
import { AiFillDatabase} from 'react-icons/ai'
import {SiAdobeillustrator} from 'react-icons/si'
import { Link } from 'react-router-dom'

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
            <h1>skills</h1>

            <div className='skills'>

              <div className='front'>
                <RiComputerFill />
                <h4>Desenvolvimento de aplicações web, como</h4>
                <p>Landing pages responsivas <br /> ecommerce sites <br />  api e suas conexões</p>
              </div>

              <div className='back'>
                <AiFillDatabase />
                <h4>Desevolvimento de bancos de dados</h4>
                <p>arquitetura e implementação de banco de dados relacionais 1 -1, n -n <br /> arquitetura e implementação de bancos de dados não relacionais </p>
              </div>

              <div className='design'>
                <SiAdobeillustrator />
                <h4>Desenvolvimento de projetos com design gráfico, como:</h4>
                <p>concepção e implementação de identidade visual <br /> logotipo, banners, imagens para redes socias <br /> estamparia <br /> edição de imagens <br /> papelaria</p>
              </div>
            </div>

          </div>
        </section>
        <section id="sec03">
          <div className="container">
            <h1>projetos</h1>
            <p>Lorem ipsum</p>
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
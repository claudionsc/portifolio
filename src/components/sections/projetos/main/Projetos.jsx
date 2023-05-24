import React from 'react'

import bm01 from '../../../assets/img/development/front/black movies/bm01.jpg'
import ghb from '../../../assets/img/development/front/github buscador/ghf02.jpg'
import lgp from '../../../assets/img/development/front/login/lg01.jpg'
import sptf from '../../../assets/img/development/front/spotify/spf01.png'
import spm from '../../../assets/img/development/front/spider man/spm01.png'
import cursos from '../../../assets/img/development/front/cursos/cursos.png'
import wally from '../../../assets/img/development/front/wally/wll03.png'

export const Projetos = () => {
    return (
        <>
            <p>Frontend</p>

            <div id='projetos'>
                <span className='projetos-span'>
                    <div className="projects01">
                        <p>Login Page</p>
                        <img src={lgp} alt='login page' />
                    </div>
                    <div className="projects01">
                        <p>Spotify - Clone</p>
                        <img src={sptf} alt='spotify clone' />
                    </div>
                </span>

                <div className='projetos02'>
                    <p>Black Movies</p>
                    <img src={bm01} alt='black movies' />
                </div>
                <div className="projetos02">
                    <p>Github Finder</p>
                    <img src={ghb} alt='github buscador' />
                </div>

                <span className='projetos-span'>
                    <div className="projects01">
                        <p>Spider Man - Landing Page</p>
                        <img src={spm} alt='spider man' />
                    </div>

                    <div className="projects01">
                        <p>Cursos</p>
                        <img src={cursos} alt='cursos' />

                    </div>

                </span>
                <span className='projetos-grid01'>

                    <div className="projects01">
                        <p>Ache o Wally</p>
                        <img src={wally} alt='wally' />
                    </div>

                </span>

            </div>
        </>
    )
}

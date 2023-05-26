import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import { FaReact } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { SiAxios } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'

import cursos01 from '../../../../assets/img/development/front/cursos/cursos01.png'
import cursos02 from '../../../../assets/img/development/front/cursos/cursos02.png'
import cursos03 from '../../../../assets/img/development/front/cursos/cursos03.png'
import gif from '../../../../assets/img/development/front/cursos/gifs/cursos.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const Cursos = () => {
    return (
        <>
            <Desc
                title={'Cursos'}
                desc={'Este projeto em ReactJs, é uma aplicação que simula tela de vídeo de uma plataforma de cursos online. O site recebe os dados de uma api, conectada a um banco de dados Postegres'}
                site={'https://claudionsc.github.io/cursos-frontend/'}
                repo={'https://github.com/claudionsc/cursos-frontend'}
            />
            <div className='tec' >
                <div className="iconspg-container">
                    <div className='iconspg'>
                        <FaReact />
                        <p>Reactjs</p>
                    </ div>

                    <div className='iconspg'>
                        <SiAxios />
                        <p>Axios</p>
                    </div>

                    <div className='iconspg'>
                        <SiRedux />
                        <p>Redux</p>
                    </div>

                    <div className='iconspg'>
                        <SiStyledcomponents />
                        <p>Styled-Components</p>
                    </div>
                </div>
            </div>
            <ImgLoader gif={gif} src01={cursos01} src02={cursos02} src03={cursos03} />
            <UpPage />
        </>
    )
}

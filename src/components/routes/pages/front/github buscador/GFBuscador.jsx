import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import {FaReact} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'
import {SiAxios} from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import {SiStyledcomponents} from 'react-icons/si'

import gf01 from '../../../../assets/img/development/front/github buscador/gf01.png'
import gf02 from '../../../../assets/img/development/front/github buscador/gf02.png'
import gf03 from '../../../../assets/img/development/front/github buscador/gf03.png'
import gif from '../../../../assets/img/development/front/github buscador/gifs/Github finder.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const GFBuscador = () => {
  return (
    <>
    <Desc 
    title={'Buscador Github'} 
    desc={'Esta é uma aplicação front-end conectada com a Api do Github. Basta digitar o nome de um usuário e você verá informações como localização, seguidores e um link para os seus repositórios.'}
    site={'https://claudionsc.github.io/github-buscador/'}
    repo={'https://github.com/claudionsc/github-buscador'}
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
                    <SiTypescript />
                    <p>Typescript</p>
                  </div>
                    
                  <div className='iconspg'>
                    <SiStyledcomponents />
                    <p>Styled-Components</p>
                  </div>
                </div>
            </div>
      <ImgLoader gif={gif} src01={gf01} src02={gf02} src03={gf03} />
      <UpPage />
    </>
  )
}

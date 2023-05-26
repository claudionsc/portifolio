import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import { FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'

import cd01 from '../../../../assets/img/development/front/cadastro/cd01.png'
import cd02 from '../../../../assets/img/development/front/cadastro/cd02.png'
import cd03 from '../../../../assets/img/development/front/cadastro/cd03.png'
import gif from '../../../../assets/img/development/front/cadastro/cd03.png'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const Cadastro = () => {
  
  return (
    <>
    <Desc 
    title={'Tela de cadastro'} 
    desc={'Este projeto em ReactJs, Aplicação que simula uma tela de cadastro.'} 
    site={'https://claudionsc.github.io/cadastro-usuarios/'}
    repo={'https://github.com/claudionsc/cadastro-usuarios'}
    />
<div className='tec' >
                <div className="iconspg-container">
                  <div className='iconspg'>
                    <FaReact />
                    <p>Reactjs</p>
                  </ div>

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
      <ImgLoader gif={gif} src01={cd01} src02={cd02} src03={cd03} />
      <UpPage />
    </>
  )
}

import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import {FaReact} from 'react-icons/fa'
import {SiStyledcomponents} from 'react-icons/si'

import wll01 from '../../../../assets/img/development/front/wally/wll01.png'
import wll02 from '../../../../assets/img/development/front/wally/wll02.png'
import wll03 from '../../../../assets/img/development/front/wally/wll03.png'
import gif from '../../../../assets/img/development/front/wally/gifs/wally.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const Wally = () => {
  return (
    <>
    <Desc 
    title={'Ache o Wally'} 
    desc={`Esta é a minha versão do famoso jogo Where's Wally. Mova o mouse pela tela para encontrá-lo.`}
    site={'https://claudionsc.github.io/cade-wally'}
    repo={'https://github.com/claudionsc/cade-wally'}
     />
      <div className='tec' >
                <div className="iconspg-container">
                  <div className='iconspg'>
                    <FaReact />
                    <p>Reactjs</p>
                  </ div>

                  <div className='iconspg'>
                    <SiStyledcomponents />
                    <p>Styled-Components</p>
                  </div>
                </div>
            </div>
      <ImgLoader gif={gif} src01={wll01} src02={wll02} src03={wll03} />
      <UpPage />
    </>
  )
}

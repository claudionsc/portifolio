import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import {FaReact} from 'react-icons/fa'
import {SiStyledcomponents} from 'react-icons/si'

import login01 from '../../../../assets/img/development/front/login/login01.png'
import login02 from '../../../../assets/img/development/front/login/login02.png'
import login03 from '../../../../assets/img/development/front/login/login03.png'
import gif from '../../../../assets/img/development/front/login/gifs/login.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const Login = () => {
  return (
    <>
    <Desc 
    title={'Login Page'} 
    desc={'Aplicação frontend com uma tela de Sign up e Sing in.'}
    site={'https://claudionsc.github.io/Sistema-de-Login/'}
    repo={'https://github.com/claudionsc/Sistema-de-Login'}
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
      <ImgLoader gif={gif} src01={login01} src02={login02} src03={login03} />
      <UpPage />
    </>
  )
}

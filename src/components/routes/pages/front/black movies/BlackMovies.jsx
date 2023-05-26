import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import {FaReact} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'
import {SiAxios} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiStyledcomponents} from 'react-icons/si'

import bm01 from '../../../../assets/img/development/front/black movies/bm01.png'
import bm02 from '../../../../assets/img/development/front/black movies/bm02.png'
import bm03 from '../../../../assets/img/development/front/black movies/bm03.png'
import gif from '../../../../assets/img/development/front/black movies/gifs/bm.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const BlackMovies = () => {
  
  return (
    <>
    <Desc 
    title={'Black Movies'} 
    desc={'Este projeto em ReactJs, é uma lista que mostra 10 dos melhores filmes com protagonismo negro. O site recebe os dados de uma api, conectada a um banco de dados Postegres'}
    site={'https://claudionsc.github.io/black-movies/'}
    repo={'https://github.com/claudionsc/black-movies'}
     />
      <div className='tec' >
                <div className="iconspg-container">
                  <div className='iconspg'>
                    <FaReact />
                    <p>Reactjs</p>
                  </ div>

                  <div className='iconspg'>
                    <FaSass />
                    <p>Sass</p>
                  </div>

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
      <ImgLoader gif={gif} src01={bm01} src02={bm02} src03={bm03} />
      <UpPage />
    </>
  )
}

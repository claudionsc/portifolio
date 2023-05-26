import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

import spm01 from '../../../../assets/img/development/front/spider man/spm01.png'
import spm02 from '../../../../assets/img/development/front/spider man/spm02.png'
import spm03 from '../../../../assets/img/development/front/spider man/spm03.png'
import gif from '../../../../assets/img/development/front/spider man/gifs/spider.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const Spider = () => {
  return (
    <>
    <Desc 
    title={'Spider Man Landing Page'} 
    desc={'Página feita seguindo live da Digital Innovation One, sendo ela tela inicial de um site sobre o Homem Aranha'}
    site={'https://claudionsc.github.io/spider-man/'}
    repo={'https://github.com/claudionsc/spider-man'}
     />
      <div className='tec' >
                <div className="iconspg-container">
                  <div className='iconspg'>
                    <FaHtml5 />
                    <p>HTML</p>
                  </ div>

                  <div className='iconspg'>
                    <FaCss3 />
                    <p>CSS</p>
                  </div>

                  <div className='iconspg'>
                    <SiJavascript />
                    <p>Javascript</p>
                  </div>
                    
                </div>
            </div>
      <ImgLoader gif={gif} src01={spm01} src02={spm02} src03={spm03} />
      <UpPage />
    </>
  )
}

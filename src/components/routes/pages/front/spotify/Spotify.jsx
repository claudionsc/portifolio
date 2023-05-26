import React from 'react'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'

import spf01 from '../../../../assets/img/development/front/spotify/spf01.png'
import spf02 from '../../../../assets/img/development/front/spotify/spf-2.png'
import spf03 from '../../../../assets/img/development/front/spotify/spf03.png'
import gif from '../../../../assets/img/development/front/spotify/gifs/spotify.gif'
import { UpPage } from '../../../../upPage/UpPage'
import { Desc } from '../../../../DescPages/Desc'

export const Spotify = () => {
  return (
    <>
    <Desc 
    title={'Spotify Clone Page'} 
    desc={'Clone da página inicial do Spotify.'}
    site={'https://claudionsc.github.io/spotify-clone/'}
    repo={'https://github.com/claudionsc/spotify-clone'}
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
                    <FaSass />
                    <p>SASS</p>
                  </div>
                    
      
                </div>
            </div>
      <ImgLoader gif={gif} src01={spf01} src02={spf02} src03={spf03} />
      <UpPage />
    </>
  )
}

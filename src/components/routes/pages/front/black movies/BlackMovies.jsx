import React from 'react'
import { Button } from '../../../../button/Button'
import { ImgLoader } from '../../../../imgLoader/ImgLoader'

import bm01 from '../../../../assets/img/development/front/black movies/bm01.png'
import bm02 from '../../../../assets/img/development/front/black movies/bm02.png'
import bm03 from '../../../../assets/img/development/front/black movies/bm03.png'
import gif from '../../../../assets/img/development/front/black movies/gifs/bm.gif'
import { UpPage } from '../../../../upPage/UpPage'

export const BlackMovies = () => {
  return (
    <div>
      <div className='projects-desc' id='up'>
        <div className='desc'>
          <h1>Black Movies</h1>
          <p>Este projeto em ReactJs, é uma lista que mostra 10 dos melhores filmes com protagonismo negro. O site recebe os dados de uma api, conectada a um banco de dados Postegres</p>
        </div>
        <Button href01={'https://claudionsc.github.io/black-movies/'} href02={'https://github.com/claudionsc/black-movies'} />
      </div>
      <ImgLoader gif={gif} src01={bm01} src02={bm02} src03={bm03} />
      <UpPage />
    </div>
  )
}

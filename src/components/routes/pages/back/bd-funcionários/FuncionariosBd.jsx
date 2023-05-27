import React from 'react'
import { Desc } from '../../../../DescPages/Desc'
import {FaNodeJs} from 'react-icons/fa'
import {BsFiletypeJson} from 'react-icons/bs'
import {SiExpress, SiSequelize} from 'react-icons/si'
import {SiNodemon} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
export const FuncionariosBd = () => {

  return (
    <div className='backend-items'>
      <Desc
        title={'Funcionários'}
        desc={'Banco de dados relacional que armazena de dados de funcionários e suas funções.'}
        site={'https://github.com/claudionsc/BD-funcionarios'}
        repo={'https://github.com/claudionsc/BD-funcionarios'}
        
      />
      <div className='tec' >
        <div className="iconspg-container">
          <h1>Neste projeto:</h1>
          <div className='iconspg'>
            <FaNodeJs />
            <p>NodeJs</p>
          </ div>

          <div className='iconspg'>
            <SiNodemon />
            <p>Nodemon</p>
          </div>

          <div className='iconspg'>
            <SiExpress />
            <p>Express</p>
          </div>

          <div className='iconspg'>
            <SiSequelize />
            <p>Sequelize</p>
          </div>

          <div className='iconspg'>
            <SiPostgresql />
            <p>Postgresql</p>
          </div>

          <div className='iconspg'>
            <BsFiletypeJson />
            <p>JSON</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

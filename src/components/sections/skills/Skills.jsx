import React from 'react'
import {RiComputerFill} from 'react-icons/ri'
import { AiFillDatabase} from 'react-icons/ai'
import {SiAdobeillustrator} from 'react-icons/si'

export const Skills = () => {
    return (
        <div className='skills'>
            
            <div className='front'>
                <span className='icon'>
                    <RiComputerFill />
                </span>
                <h4>Desenvolvimento de aplicações web, como</h4>
                <p>Landing pages responsivas <br /> ecommerce sites <br />  api e suas conexões</p>
            </div>

            <div className='back'>
                <span className='icon'>
                    <AiFillDatabase />
                </span>
                <h4>Desevolvimento de bancos de dados</h4>
                <p>arquitetura e implementação de banco de dados relacionais 1 -1, n -n <br /> arquitetura e implementação de bancos de dados não relacionais </p>
            </div>

            <div className='design'>
                <span className='icon'>
                    <SiAdobeillustrator />
                </span>
                <h4>Desenvolvimento de projetos com design gráfico, como:</h4>
                <p>concepção e implementação de identidade visual <br /> logotipo, banners, imagens para redes socias <br /> estamparia <br /> edição de imagens <br /> papelaria</p>
            </div>
        </div>
    )
}

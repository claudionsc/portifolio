import React from 'react'
import { Link } from 'react-router-dom'

const BackFilter = () => {
    return (
        <>
            <p>Backend</p>
            <ul id='backend-list'>
                <Link to={'/bd-fIlmes'}>
                    <li className='cards'>
                        <h4>Filmes com protagonismo negro</h4>
                        <p>Backend, banco de dados</p>
                    </li>
                </Link>

                <Link to={'/bd-cursos'}>
                    <li className='cards'>
                        <h4>Cursos</h4>
                        <p>Backend, banco de dados</p>
                    </li>
                </Link>

                <Link to={'/bd-ecommerce'}>
                    <li className='cards'>
                        <h4>Ecommerce Frutas</h4>
                        <p>Backend, banco de dados</p>
                    </li>
                </Link>

                <Link to={'/bd-funcionarios'}>
                    <li className='cards'>
                        <h4>Funcionários</h4>
                        <p>Backend, banco de dados</p>
                    </li>
                </Link>
            </ul>
        </>
    )
}

export default BackFilter
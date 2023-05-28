import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <nav>
      <div className='logo'>
        <Link to="/portifolio">nsc</Link>
      </div>
        <a href="#sec01">home</a>
        <a href="#sec02">skills</a>
        <a href="#sec03">projetos</a>
        <a href="#sec04">contatos</a>
    </nav>
  )
}

export default Header
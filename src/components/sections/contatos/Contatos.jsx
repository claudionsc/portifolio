import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Contatos = () => {
  return (
    <>
        <h1>Como posso te ajudar?</h1>
        <p>Entre em contato comigo!</p>

    <div className="contato">

        <div >
            <a href="https://github.com/claudionsc" rel="noreferrer" target="_blank">
                <AiFillGithub />
            </a>
        </div>
        <div >
            <a href="https://www.linkedin.com/in/claudionsc/" rel="noreferrer" target="_blank">
                <AiFillLinkedin />
            </a>
        </div>
        <div >
            <a href="mailto:claudio.nsc@hotmail.com?subject=Vim pelo portifólio!">
                <AiOutlineMail />
            </a>
        </div>
    </div>
    <p>claudio.nsc@hotmail.com</p>
    <p>(71) 99201-5401</p>
    <p>(71) 99954-0449</p>
    </>

  )
}

export default Contatos
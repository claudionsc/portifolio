import React from "react";
import Main from "./Main";
import img from '../../img/img.jpg'
import { Link } from 'react-router-dom'
import 'animate.css'

export function Inicial(){

    return (
        <>
            <Main>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '0 30px'}}>
                    <div className="outline" style={{ 
                        width: 'auto', height:'9%',
                        display: 'flex', justifyContent: "center", alignItems: 'center', fontFamily: 'Syncopate, sans-serif', fontSize: '28px'}}>
                        <h1>Oi, eu sou o Claudio</h1>
                    </div>
                    <div style={{ 
                        width: '75%', height:'55%',
                         borderRadius: '10px',
                         fontFamily: 'PT Sans, sans-serif', marginTop: '20px'
                        }}>
                            <p>
                                Fullstack Developer, designer e graduando em Marketing, me considero apaixonado por tecnologia
                                e tudo relacionado à ela. Seja bem vindo(a) ao meu portifólio!
                            </p>
                            <a href="https://www.linkedin.com/in/claudionsc/" rel="noopener" target="_blank" className="navbar-logo link">
                                <i className="fa-brands fa fa-linkedin"></i>
                            </a> 
                            <a href="https://github.com/claudionsc" rel="noopener" target="_blank" className="navbar-logo link">
                                <i className="fa-brands fa fa-github"></i>
                            </a>

                            

                        <span>
                            <Link to={'/projetos'}>
                                <a href="https:/www.google.com" rel="noopener" target="_blank" className="navbar-logo link">
                                    <i className="fa-solid fa fa-telescope"></i>
                                    <p>Meus projetos</p>
                                </a>
                            </Link>
                        </span>
                       
                                
                    </div>
                </div>

                    <div>
                        <img src={img} alt='foto' style={{ width: '150px', borderRadius: '50%', margin: '0 150px'}}/>
                    </div>

            </Main>
        </>
    )
    }

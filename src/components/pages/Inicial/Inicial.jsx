import React from "react";
import Main from "./Main";
import { Button2 } from "../../Buttons/Button2";
import img from '../../img/img.png'
import { Link } from 'react-router-dom'
import 'animate.css'

export function Inicial(){

    return (
        
            <Main>
                <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'flex-start'}}>
                    <div className="outline">
                        <h1>Oi, bem vindo ao meu portifólio</h1>
                    </div>
                    <div style={{ 
                        width: '100%', height:'55%',
                        fontFamily: 'PT Sans, sans-serif', marginTop: '20px'
                        }}>
                            <p>
                                Fullstack Developer, designer e graduando em Marketing, me considero apaixonado por tecnologia
                                e tudo relacionado à ela. Seja bem vindo(a) ao meu portifólio!
                            </p>
                              
                    </div>
                    <div style={{ marginTop: '30px'}}>
                            <a href="https://www.linkedin.com/in/claudionsc/" rel="noopener" target="_blank" className="navbar-logo link">
                                <i className="fa-brands fa fa-linkedin"></i>
                            </a> 
                            <a href="https://github.com/claudionsc" rel="noopener" target="_blank" className="navbar-logo link">
                                <i className="fa-brands fa fa-github"></i>
                            </a>
                        </div>
                </div>
                    
                    <div className="m-links">
                        <div className="note">
                            <img src={img} alt='foto'/>
                        </div>
                        <span>
                           
                            <Link to={'/projetos'}>
                                <Button2>
                                    <p>Meus projetos</p>
                                </Button2>
                            </Link>

                            <Link to={'/sobre'}>
                                <Button2>
                                    <p>Sobre Mim</p>
                                </Button2>
                            </Link>
                        </span>
                        
                    </div>

            </Main>
    )
    }

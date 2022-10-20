import React from "react";
import Main from "./Main";
import { Button2 } from "../../Buttons/Button2";
import img from '../../img/img.png'
import { Link } from 'react-router-dom'
import 'animate.css'

export function Inicial(){

    return (
        
            <Main>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '90px 30px'}}>
                    <div className="outline" style={{ 
                        width: 'auto', height:'9%',
                        display: 'flex', justifyContent: "center", alignItems: 'center', fontFamily: 'Syncopate, sans-serif', fontSize: '28px'}}>
                        <h1>Oi, bem vindo ao meu portifólio</h1>
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
                    
                    <div style={{ width: '30vw', height: 'auto',  borderRadius: '6px', margin: '0 30px', padding: '20px, 10px' }}>
                        <div className="note">
                            <img src={img} alt='foto' style={{ width: '100px', margin: '0 150px'}}/>
                        </div>
                        <span style={{fontFamily: 'PT Sans, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                           
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

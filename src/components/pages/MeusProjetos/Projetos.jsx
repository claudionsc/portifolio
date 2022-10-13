import React from "react"
import styled from "styled-components"
import Main from "../Inicial/Main"
import { Button } from "../../Buttons/Button"

const ImgContainer = styled.div`
    width: 15vw;
    height: 25vh;
    background-color: #b37272;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 5px 5px;
    /* margin: 10px 0; */
    transition: all 100ms ease-in-out;

    :hover{
        ::before{
                content: 'Nome do projeto';
                width: 100%;
                background-color: #0000005c;
                text-align: center;
                font-size: 0.9rem;
                
            }
          
        scale: 110%;
        
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: auto;

`


export default function Projetos(){
    return (
        <Main>
            <Grid>
                <div >
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div>
                    
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div >
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div>
                    
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div >
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div>
                    
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div >
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
                <div>
                    
                    <ImgContainer>
                        Imagens
                        <Button>Ver projeto</Button>
                    </ImgContainer>
                </div>
            </Grid>
        </Main>
    )
}


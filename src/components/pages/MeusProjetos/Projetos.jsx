import React from "react"
import styled from "styled-components"
// import Main from "../Inicial/Main"
// import { Button } from "../../Buttons/Button"

const ImgContainer = styled.div`
    width: 25vw;
    height: 35vh;
    background-color: #b37272;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* margin: 10px 0; */
    transition: all 100ms ease-in-out;

    :hover{
        ::before{
                content: "Nome";
                width: 100%;
                height: 100%;
                background-color: #0000005c;
                text-align: center;
                font-size: 0.9rem;
                
            }
          
        scale: 110%;
        
    }

    @media(max-width: 600px){
        width: 70vw;
        height: 50vh;

    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: auto;
    margin-top: 200px;

    @media (max-width: 600px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        margin: auto;
    }

`

const Project = styled.div`

    width: 90vw;
    height: auto;
    background-color: red;
    margin: auto;
    display: flex;
    align-items: center;

    @media (max-width: 600px){
        margin-top: 500px;
    }


`


export default function Projetos(){
    return (

        <Project>
            <Grid>
                <div >
                    <ImgContainer />
                </div>

                <div>
                    
                    <ImgContainer /></div>
                <div >
                    <ImgContainer /></div>
                <div>
                    
                    <ImgContainer /></div>
                <div >
                    <ImgContainer /></div>
                <div>
                    
                    <ImgContainer /></div>
                <div >
                    <ImgContainer />
            
    
                </div>
                <div>
                    
                    <ImgContainer />
                
    
                </div>
            </Grid>
        </Project>
    )
}


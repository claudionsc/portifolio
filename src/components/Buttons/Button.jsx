import React from 'react'
import styled from 'styled-components'

const StyledButtons = styled.button`
    width: 15vw;
    height: 35px;
    background-color: #3A0044;
    border: #5E036D 1px solid;
    margin: 0 10px;
    border-radius: 0 0 5px 5px;

    :hover{
        background-color: #5E036D;
        -webkit-box-shadow: 0px 1px 14px -3px #d000ff91; 
        box-shadow: 0px 1px 14px -3px #d000ff91;
        cursor: pointer;
    }
`

export function Button({children}){

    return (
        <StyledButtons>{children}</StyledButtons>
    )
}
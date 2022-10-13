import React from 'react'
import styled from 'styled-components'

const StyledButtons = styled.button`
    width: 10vw;
    height: 35px;
    border: #ffffff 2px solid;
    background-color: rgba(255, 255, 255, 0);
    margin: 0 10px;
    border-radius:  5px;
    transition: all 500ms ease-in-out;
    align-self: center;
    justify-self: center;
    margin: 10px 0;

    :hover{
        border: #5E036D 2px solid;
        cursor: pointer;
    }
`

export function Button2({children}){

    return (
        <StyledButtons>{children}</StyledButtons>
    )
}
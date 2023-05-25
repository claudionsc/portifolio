import React from 'react'

export const Button = (props) => {
    return (
        <div id="projects-button">
            <button><a href={props.href01} rel="noreferrer" target="_blank" ><p>Ver aplicação</p></a></button>
            <button><a href={props.href02} rel="noreferrer" target="_blank"><p>Ver repositório</p></a></button>
        </div>
    )
}

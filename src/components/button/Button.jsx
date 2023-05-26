import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (props) => {
    return (
        <div id="projects-button">
            <button><Link to={'/'}><p>Home</p></Link></button>
            <button><a href={props.site} rel="noreferrer" target="_blank" ><p>Ver aplicação</p></a></button>
            <button><a href={props.repo} rel="noreferrer" target="_blank"><p>Ver repositório</p></a></button>
        </div>
    )
}

import React from 'react'
import { Button } from '../button/Button'

export const Desc = (props) => {
    return (
        <div className='projects-desc' id='up'  >
            <div className='desc' title={props.title} desc={props.desc} >
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
           
            <Button site={props.site} repo={props.repo} />
        </div>
    )
}

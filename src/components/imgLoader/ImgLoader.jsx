import React from 'react'

export const ImgLoader = (props) => {
    return (
        <div id="projetos-img">
            <div className='projetos-item-img'>
                <img src={props.gif} alt={props.alt01} />
            </div>

            <div className='projetos-item-img'>
                <img src={props.src01} alt={props.alt01} />
            </div>

            <div className='projetos-item-img'>
                <img src={props.src02} alt={props.alt02} />
            </div>

            <div className='projetos-item-img'>
                <img src={props.src03} alt={props.alt03} />
            </div>
        </div>
    )
}

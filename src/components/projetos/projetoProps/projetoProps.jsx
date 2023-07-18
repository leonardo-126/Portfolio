import { useState } from 'react'
import './projetoProps.css'

export const ProjetoProps = (props) => {

    return (
        <div className='projetoProps-container'>
            <div className='projetoProps-container-item'>
                <img src={props.imgFundo} alt={props.altFundo}/>
                <a href={props.link} target='_blank' style={ props.dark ? {color: 'rgb(87, 67, 69)'}:{ color: '#39324d'}}>View</a>
            </div>
        </div>
    )
}
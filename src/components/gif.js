import React from 'react';
import './gif.css';

export default function Gif(props) {
    return (
        <img src={props.img} alt={props.alt}/>
    )
}
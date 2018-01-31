import React from 'react';
import './gif.css';
import { connect } from 'react-redux';

export function Gif(props) {
    return (
        <img id={props.id} src={props.img} alt={props.alt}/>
    )
};

const mapStateToProps = (state, props) => {
    const image = state.images[props.randomImageLocation];
    return {
        id: image.key,
        img: image.img,
        alt: image.alt
    }
}

export default connect(mapStateToProps)(Gif);
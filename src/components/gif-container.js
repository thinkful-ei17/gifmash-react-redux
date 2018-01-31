import React from 'react';
import Gif from './gif';
import './gif-container.css';
import { connect } from 'react-redux';
import { pickWinner } from '../actions';

export function GifContainer(props) {
    
    const onSubmit = function(event) {
        event.preventDefault();
        const winnerId = parseInt(event.target.getElementsByTagName('img')[0].id, 10);
        props.dispatch(pickWinner(winnerId));
      };

    return (
        <div className="container">
            <form className="option" onSubmit = {e => onSubmit(e)}>
                <Gif randomImageLocation={props.imageA} />
                <input type="submit" value='Option A' />
            </form>
            <form className="option" onSubmit = {e => onSubmit(e)}>
                <Gif randomImageLocation={props.imageB} />
                <input type="submit" value='Option B' />
            </form>
        </div>
    )
}

const mapsStateToProps = state => ({
    imageA: state.imageA,
    imageB: state.imageB
})

export default connect(mapsStateToProps)(GifContainer)
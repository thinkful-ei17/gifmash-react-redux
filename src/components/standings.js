import React from 'react';
import Record from './record';
import { connect } from 'react-redux';
import './standings.css';

export function Standings(props) {
    
    return (
        <div className="standings">
            <h3>TOP FIVE:</h3>
            <Record rank={1} id={props.id1} />
            <Record rank={2} id={props.id2} />
            <Record rank={3} id={props.id3} />
            <Record rank={4} id={props.id4} />
            <Record rank={5} id={props.id5} />
        </div>
    )
};

const mapStateToProps = state => {
    const rankedImages = state.images.sort((a,b) => b.wins - a.wins)
    return {
        id1: rankedImages[0].key,
        id2: rankedImages[1].key,
        id3: rankedImages[2].key,
        id4: rankedImages[3].key,
        id5: rankedImages[4].key,
    }
}

export default connect(mapStateToProps)(Standings);
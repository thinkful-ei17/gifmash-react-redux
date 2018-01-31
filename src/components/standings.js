import React from 'react';
import Record from './record';
import { connect } from 'react-redux';
import './standings.css';

export function Standings(props) {
    
    return (
        <div>
            <h3>TOP FIVE:</h3>
            <div className="record">1. <Record id={props.id1} /></div>
            <div className="record">2. <Record id={props.id2} /></div>
            <div className="record">3. <Record id={props.id3} /></div>
            <div className="record">4. <Record id={props.id4} /></div>
            <div className="record">5. <Record id={props.id5} /></div>
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
import React from 'react';
import { connect } from 'react-redux';
import './record.css'

export function Record(props) {
    return (
        <div className="record">
          <img className="thumbnail" src={props.img} alt={props.alt} />
          : {props.wins} WINS
        </div>
    )
}

const mapStateToProps = (state, props) => {
    for (let i=0; i<state.images.length; i++) {
        if (state.images[i].key === props.id) {
            return {
                alt: state.images[i].alt,
                img: state.images[i].img,
                wins: state.images[i].wins
            }
        }
    }
}

export default connect(mapStateToProps)(Record)
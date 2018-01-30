import React from 'react';
import Gif from './gif';
import './gif-container.css';

export default function GifContainer() {
    return (
        <div className="container">
            <div className="option">
                <Gif img="https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif" alt="Salt Bae" />
                <button>Option A</button>
            </div>
            <div className="option">
                <Gif img="https://media.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif" alt="Grumpy Cat" />
                <button>Option B</button>
            </div>
        </div>
    )
}

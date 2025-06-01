'use client';

import React from 'react';

import { 
    cardStyle, 
    imageStyle, 
    badgeStyle, 
    fallbackStyle 
} from './CardStyles';

export default function Card() {

    return (
        <div
            style={cardStyle}
            className="group hover:scale-105"
        >
            <div style={badgeStyle}>1</div>

            <img
                src="/skull.svg"
                alt="Card Image"
                style={imageStyle}
            />

            <div style={fallbackStyle}>
                <span className="group-hover:opacity-0 transition-opacity duration-300">Skull</span>
            </div>
        </div>
    );
}

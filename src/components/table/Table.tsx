'use client';

import React from 'react';

import {
    tableContainerStyle,
    topTextStyle,
    cardAreaStyle,
    bottomTextStyle
} from './TableStyles';

export default function Table() {
    return (
    <div style={tableContainerStyle}>
        <div style={topTextStyle}>Opponent's Hand</div>

        <div style={cardAreaStyle}>
            {/* <p className="text-xl">Card Grid Area</p> */}
        </div>

        <div style={bottomTextStyle}>Your Hand</div>
    </div>
    )
}
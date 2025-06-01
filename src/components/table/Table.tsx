'use client';

import React, { useEffect, useState } from 'react';

import Card from '../card/Card';
import {
    tableContainerStyle,
    topTextStyle,
    cardAreaStyle,
    bottomTextStyle
} from './TableStyles';

interface TableProps {
    cardOnTable: boolean;
}

export default function Table({ cardOnTable }: TableProps) {
    const [ showCard, setShowCard ] = useState(false);

    useEffect( () => {
        if (cardOnTable) {
            setTimeout(() => setShowCard(true), 300);
        }
    }, [cardOnTable])

    return (
    <div style={tableContainerStyle}>
        <div style={topTextStyle}>Opponent's Hand</div>

        <div id='cardArea'style={cardAreaStyle}>
            {showCard && <Card isInTable={true} />}
        </div>

        <div style={bottomTextStyle}>Your Hand</div>
    </div>
    )
}
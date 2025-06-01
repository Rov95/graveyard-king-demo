'use client';

import React from 'react';
import Link from 'next/link';

import Card from '@/components/card/Card';  
import Table from '@/components/table/Table';
import { boardStyle } from './tablePageStyles';

export default function Page() {
    const [isCardOnTable, setIsCardOnTable] = React.useState(false);

    const handleCardClick = () => {
        setIsCardOnTable(true);
    };

    return (
        <main style={boardStyle}>
            <Table cardOnTable={isCardOnTable}/>
            {!isCardOnTable && (
                <Card onClick={handleCardClick}/>
            )}
            <Link href="/" style={{ position: 'absolute', bottom: 20, left: 20 }}>
                Go back to Home
            </Link>
        </main>
    );
}
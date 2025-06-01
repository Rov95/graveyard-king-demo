'use client';

import React from 'react';
import Link from 'next/link';

import Card from '@/components/card/Card';  

import Table from '@/components/table/Table';
import { cardStyle } from './tablePageStyles';

export default function Page() {
    return (
        <main style={cardStyle}>
            <Table />
            <Card />
            <Link href="/">
                Go back to Home
            </Link>
        </main>
    );
}
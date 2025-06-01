'use client';

import React from 'react';
import Link from 'next/link';


import InfoButton from '@/components/infoButon/InfoButton';
import StartButton from '@/components/startButton/StartButton';
// import Card from '@/components/Card';   

import {
    mainContainerStyle,
    headingStyle,
    startButtonWrapper,
    infoButtonWrapper
} from './WelcomeScreenStyles';

export default function WelcomeScreen() {
    return (
        <main style={mainContainerStyle}>
            <div style={infoButtonWrapper}>
                <InfoButton />
            </div>

            <h1 style={headingStyle}>Here start your nightmares!</h1>

            <div style={startButtonWrapper}>
                <Link href="/table">
                    <StartButton />
                </Link>
            </div>
        </main>
    );
}

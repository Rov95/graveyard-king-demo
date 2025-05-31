'use client';

import React from 'react';
import InfoButton from '../../components/InfoButton';
import StartButton from '../../components/StartButton';

export default function WelcomeScreen() {
    return (
        <main style={styles.container}>
            <h1 style={styles.title}>Welcome to the App!</h1>
            <div style={styles.buttons}>
                <StartButton />
                <InfoButton />
            </div>
        </main>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    buttons: {
        display: 'flex',
        gap: '1.5rem',
    },
};
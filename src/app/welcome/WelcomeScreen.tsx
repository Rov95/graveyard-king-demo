'use client';

import React from 'react';
import Link from 'next/link';


import InfoButton from '@/components/InfoButton';
import StartButton from '@/components/StartButton';
import Card from '@/components/Card';   

export default function WelcomeScreen() {
    return (
        <main className='h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-white'>
            <h1 className='text-3xl mb-5'>Welcome to the App!</h1>
            <Card />
            <div className='flex gap-6'>
                <Link href="/table" className="text-blue-500 hover:underline">
                    <StartButton />
                </Link>
                <InfoButton />
            </div>
        </main>
    );
}

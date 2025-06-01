import React from 'react';

import WelcomeScreen from '@/app/welcome/WelcomeScreen';


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <WelcomeScreen />
    </div>
  );
}
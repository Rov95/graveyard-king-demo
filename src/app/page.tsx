import React from 'react';

import WelcomeScreen from '@/app/welcome/WelcomeScreen';


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Application</h1>
      <WelcomeScreen />
      <p className="text-lg mb-4">Explore the features and functionalities.</p>
    </div>
  );
}
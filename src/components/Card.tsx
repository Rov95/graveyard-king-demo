'use client';

import React from 'react';

export default function Card() {
    return (
        <div className="w-28 h-40 bg-gradient-to-br from-gray-800 to-black rounded-xl border-2 border-white shadow-lg 
                        hover:scale-105 transition-transform duration-200 
                        relative overflow-hidden group">
            {/* Card image placeholder */}
            <img
                src="/skull.svg" // Replace with your image path
                alt="Card Image"
                className="w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
            />
            <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                    Card Image
                </span>
            </div>

            {/* Optional shimmer/glow effect */}
            <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none animate-pulse" />
        </div>
    );
}
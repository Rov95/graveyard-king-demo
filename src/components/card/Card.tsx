'use client';

import React, { useEffect, useState } from 'react';

import { 
    cardStyle, 
    imageStyle, 
    badgeStyle, 
    fallbackStyle 
} from './CardStyles';

interface CardProps {
    onClick?: () => void;
    isInTable?: boolean;
}

export default function Card({ onClick, isInTable = false }: CardProps) {
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (isInTable) {
            // Fade in when appearing on table
            setFadeIn(true);
        }
    }, [isInTable]);

    const handleClick = () => {
        setFadeOut(true);
        setTimeout(() => {
            onClick?.();
        }, 300)
    }

    return (
        <div
            onClick={handleClick}
            style={{
                width: '150px',
                height: '250px',
                borderRadius: '0.375rem',
                border: '7px solid grey',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom right, #2d2d2d, #000)',
                transition: 'opacity 0.3s ease, transform 0.2s ease-in-out',
                opacity: isInTable ? (fadeIn ? 1 : 0) : (fadeOut ? 0 : 1),
                position: isInTable ? 'relative' : 'absolute',
                bottom: isInTable ? undefined : '20px',
                right: isInTable ? undefined : '50%',
                transform: isInTable ? 'none' : 'translateX(50%)',
                zIndex: 5,
                cursor: isInTable ? 'default' : 'pointer',
            }}
            // style={cardStyle}
            className="group hover:scale-105"
        >
            <div style={badgeStyle}>1</div>

            <img
                src="/skull.svg"
                alt="Card Image"
                style={imageStyle}
            />

            <div style={fallbackStyle}>
                <span className="group-hover:opacity-0 transition-opacity duration-300">Skull</span>
            </div>
        </div>
    );
}

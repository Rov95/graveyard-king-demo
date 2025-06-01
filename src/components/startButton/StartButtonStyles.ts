import { CSSProperties } from "react";

export const circularButtonStyles: CSSProperties = {
    width: '48px',
    height: '48px',
    backgroundColor: '#6b7280', // Tailwind's gray-500
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const circularButtonHoverStyles: CSSProperties = {
    boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.7)',
};
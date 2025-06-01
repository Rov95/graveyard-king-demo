import { CSSProperties } from "react";

export const cardStyle: CSSProperties = {
    width: '150px',
    height: '250px',
    position: 'relative',
    borderRadius: '0.375rem',
    border: '7px solid grey',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom right, #2d2d2d, #000)',
    transition: 'transform 0.2s ease-in-out',
};

export const imageStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.6,
    zIndex: 0,
};

export const badgeStyle: CSSProperties = {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
    border: '1px solid #555',
    zIndex: 2,
};

export const fallbackStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    pointerEvents: 'none',
    color: 'white',
    fontSize: '10px',
    opacity: 0.7,
};
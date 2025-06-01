import { CSSProperties } from 'react';

export const mainContainerStyle: CSSProperties = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("/sunset.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '1rem',
    color: 'white',
};

export const headingStyle: CSSProperties = {
    fontSize: '2rem',
    marginBottom: '1.25rem',
    textShadow: '2px 2px 4px black',
    textAlign: 'center',
};

export const startButtonWrapper: CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
};

export const infoButtonWrapper: CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
};

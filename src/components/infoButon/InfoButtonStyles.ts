import { CSSProperties } from "react";

export const triangleButtonStyle: CSSProperties = {
    width: '10',
    height: '10',
    borderLeft: '30px solid transparent',
    borderRight: '30px solid transparent',
    borderBottom: '52px solid #facc15', 
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
}

export const triangleButtonHoverStyle: CSSProperties = {
    boxShadow: '0 0 10px 5px rgba(250, 204, 21, 0.7)',
};
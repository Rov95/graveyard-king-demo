import React from "react";

import { circularButtonStyles, circularButtonHoverStyles } from "./StartButtonStyles";

export default function StartButton() {
    const [hover, setHover] = React.useState(false);

    return (
        <button
            style={{
                ...circularButtonStyles,
                ...(hover ? circularButtonHoverStyles : {}),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            Start
        </button>
    );
}
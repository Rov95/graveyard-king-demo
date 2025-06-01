import React from "react";
import { triangleButtonStyle, triangleButtonHoverStyle } from "./InfoButtonStyles";

export default function InfoButton() {
    const [hover, setHover] = React.useState(false);

    return (
        <button
            style={{
                ...triangleButtonStyle,
                ...(hover ? triangleButtonHoverStyle : {}),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            aria-label="Info"
        />
    )

}
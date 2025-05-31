import React from "react";

export default function InfoButton() {
    const handleClick = () => {
        alert("This is an info button. Clicked!");
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Start
        </button>
    );
}
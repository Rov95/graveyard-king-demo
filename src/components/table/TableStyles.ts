import { CSSProperties } from "react";

export const tableContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateRows: "1fr 3fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "8px",
    padding: "20px",
    border: "8px solid #b8860b", 
    borderRadius: "24px",
    backgroundColor: "black", 
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
    width: "90%",
    maxWidth: "900px",
    margin: "auto",
};

export const topTextStyle: CSSProperties = {
    gridColumn: "1 / 4",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    color: "white",
};

export const cardAreaStyle: CSSProperties = {
    gridColumn: "1 / 4",
    height: "260px",
    backgroundColor: "#2f4f4f", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    boxShadow: "inset 0 0 12px rgba(0, 0, 0, 0.6)",
};

export const bottomTextStyle: CSSProperties = {
    ...topTextStyle,
    marginTop: "12px",
};

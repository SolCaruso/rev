import React from "react";

export default function Card({
  image,      
  colors,     
  style,
}) {

  return (
    // OUTER WRAPPER: 2px gradient border
    <div
      style={{
        ...style,
        background: "linear-gradient(to bottom left, #919191, #303030)",
        borderRadius: "15px",
        width: "307px",
        height: "400px",
        padding: "1px",
        position: "relative",
        flex: "0 0 auto",
        minWidth: "307px",
        minHeight: "400px",
      }}
    >
      {/* INNER CARD */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
          // Use the two hex codes in `colors`
          background: `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >

        {/* DOG IMAGE */}
        <img
          src={image}
          alt={"NFT"}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transformOrigin: "bottom center",
            transform: "translateX(-50%) scale(1.2)",
          }}
        />
      </div>
    </div>
  );
}
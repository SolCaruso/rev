import CardIcon from "@/components/icons/CardIcon";
import Spade from "@/components/icons/Spade";

export default function Card() {
  return (
    // OUTER WRAPPER: 2px gradient border
    <div
      style={{
        background: "linear-gradient(to bottom left, #919191, #303030)",
        borderRadius: "15px",
        width: "307px",
        height: "428px",
        padding: "1px",
        position: "relative",

        // KEY: Prevent flex containers from shrinking this card
        flex: "0 0 auto",       // = flex-basis: auto; flex-grow: 0; flex-shrink: 0;
        // or flexShrink: 0,
        
        // Optionally ensure minWidth/minHeight so it never shrinks below 300×420
        minWidth: "307px",
        minHeight: "428px",
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
          background: "linear-gradient(to bottom right, #698D65, #A9BBA8)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* TOP-LEFT: Card Icon + Spade + Blackjack Title */}
        <div
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 10,
          }}
        >
          <div style={{ position: "relative", width: "45px", height: "45px" }}>
            <CardIcon style={{ width: "45px", height: "45px" }} />
            <Spade
              style={{
                width: "24px",
                height: "24px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          <span
            style={{
              color: "#A9BBA8",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Blackjack
          </span>
        </div>

        {/* DOG IMAGE */}
        <img
          src="/images/dog1.png"
          alt="Dog"
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
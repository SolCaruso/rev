import React from "react";
import CardIcon from "@/components/icons/CardIcon";

// Optional game icons. If you don’t have them all, remove or stub out the imports.
import BlackjackIcon from "@/components/icons/Blackjack";
import BasketballIcon from "@/components/icons/Basketball";
import RouletteIcon from "@/components/icons/Roulette";
import HockeyIcon from "@/components/icons/Hockey";
import SicBoIcon from "@/components/icons/SicBo";
import MMAIcon from "@/components/icons/MMA";
import FootballIcon from "@/components/icons/Football";
import BaseballIcon from "@/components/icons/Baseball";
import DominoesIcon from "@/components/icons/Dominoes";
import PokerIcon from "@/components/icons/Poker";
import CrapsIcon from "@/components/icons/Craps";
import SoccerIcon from "@/components/icons/Soccer";
import TexasHoldEmIcon from "@/components/icons/Texas";

// Map each game name to its respective icon component
const gameIconMap = {
  Blackjack: BlackjackIcon,
  Basketball: BasketballIcon,
  Roulette: RouletteIcon,
  Hockey: HockeyIcon,
  SicBo: SicBoIcon,
  MMA: MMAIcon,
  Football: FootballIcon,
  Baseball: BaseballIcon,
  Dominoes: DominoesIcon,
  Poker: PokerIcon,
  Craps: CrapsIcon,
  Soccer: SoccerIcon,
  TexasHoldEm: TexasHoldEmIcon,
};

export default function Card({
  image,       // e.g. "/images/dog1.png"
  colors,      // e.g. ["#698D65", "#A9BBA8"]
  game,        // e.g. "Blackjack"
  gameIcon,    // e.g. "Blackjack"
  style,
}) {
  // Grab the correct game icon component
  const GameIconComponent = gameIconMap[gameIcon];

  return (
    // OUTER WRAPPER: 2px gradient border
    <div
      style={{
        ...style,
        background: "linear-gradient(to bottom left, #919191, #303030)",
        borderRadius: "15px",
        width: "307px",
        height: "428px",
        padding: "1px",
        position: "relative",
        flex: "0 0 auto",
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
          // Use the two hex codes in `colors`
          background: `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* TOP-LEFT: Card Icon behind + Game Icon on top + Title text */}
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
            {/* Main card icon with a dynamic stroke color = the second color */}
            <CardIcon
              style={{ width: "45px", height: "45px" }}
              strokeColor={colors[1]}
            />
            {/* Overlap the game icon in the center (like the “Spade” in your old code) */}
            {GameIconComponent && (
              <GameIconComponent
                style={{
                  width: "24px",
                  height: "24px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>

          {/* Title text (same metallic color as your old example) */}
          <span
            style={{
              color: "#A9BBA8",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {game}
          </span>
        </div>

        {/* DOG IMAGE */}
        <img
          src={image}
          alt={game}
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
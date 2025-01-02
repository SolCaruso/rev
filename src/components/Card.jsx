import React from "react";

// EXAMPLE: If you want to import all possible icons:
import GreenCardIcon from "@/components/icons/GreenCardIcon";
import PurpleCardIcon from "@/components/icons/PurpleCardIcon";
import BlueCardIcon from "@/components/icons/BlueCardIcon";
import RedCardIcon from "@/components/icons/RedCardIcon";
import YellowCardIcon from "@/components/icons/YellowCardIcon";

// Import game icons:
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
import TexasHoldEmIcon from "@/components/icons/TexasHoldEm";

// Create a lookup so we can dynamically pick the right icon component
const cardIconMap = {
  GreenCardIcon,
  PurpleCardIcon,
  BlueCardIcon,
  RedCardIcon,
  YellowCardIcon,
};

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
  image,
  colors,
  cardIcon,
  game,
  gameIcon,
  style,
}) {
  // This picks the correct CardIcon component or undefined
  const CardIconComponent = cardIconMap[cardIcon];
  // This picks the correct GameIcon component or undefined
  const GameIconComponent = gameIconMap[gameIcon];

  return (
    // OUTER WRAPPER: 2px gradient border
    <div
      style={{
        ...style, // if we want to allow parent container's style (width, etc.)
        background: "linear-gradient(to bottom left, #919191, #303030)",
        borderRadius: "15px",
        padding: "1px",
        position: "relative",
        flex: "0 0 auto", // ensures the card won't shrink
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
          // This is the gradient for the actual card background
          background: `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* TOP-LEFT: Card Icon + Game Icon + game Title */}
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
          {/* If you have a CardIcon component: */}
          {CardIconComponent && (
            <div style={{ position: "relative", width: "45px", height: "45px" }}>
              <CardIconComponent style={{ width: "45px", height: "45px" }} />
            </div>
          )}

          {/* If you have a separate game icon: */}
          {GameIconComponent && (
            <div style={{ position: "relative", width: "24px", height: "24px" }}>
              <GameIconComponent />
            </div>
          )}

          <span
            style={{
              color: "#FFF",
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
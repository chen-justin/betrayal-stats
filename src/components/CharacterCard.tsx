import "../styles/CharacterCard.scss";
import React, { useState } from "react";
import Character from "../character";
import StatDisplay from "./StatDisplay";

interface CharacterCardProps {
  char: Character;
  charAlt: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = props => {
  const [altSelected, setAltSelected] = useState(false);
  const char = altSelected ? props.charAlt : props.char;
  const {
    name,
    might,
    might_start,
    speed,
    speed_start,
    sanity,
    sanity_start,
    knowledge,
    knowledge_start
  } = { ...char };

  const [MtIdx, setMtIdx] = useState(might_start);
  const [SpdIdx, setSpdIdx] = useState(speed_start);
  const [StyIdx, setStyIdx] = useState(sanity_start);
  const [KnlIdx, setKnlIdx] = useState(knowledge_start);

  return (
    <div className="CharacterCard">
      <div className="CharacterName">Name: {name}</div>
      <StatDisplay
        statName={"Might"}
        statValues={might}
        startValue={might_start}
        currIndex={MtIdx}
        onChange={idx => {
          setMtIdx(idx);
        }}
      />
      <StatDisplay
        statName={"Speed"}
        statValues={speed}
        startValue={speed_start}
        currIndex={SpdIdx}
        onChange={idx => {
          setSpdIdx(idx);
        }}
      />
      <StatDisplay
        statName={"Sanity"}
        statValues={sanity}
        startValue={sanity_start}
        currIndex={StyIdx}
        onChange={idx => {
          setStyIdx(idx);
        }}
      />
      <StatDisplay
        statName={"Knowledge"}
        statValues={knowledge}
        startValue={knowledge_start}
        currIndex={KnlIdx}
        onChange={idx => {
          setKnlIdx(idx);
        }}
      />
    </div>
  );
};

export default CharacterCard;

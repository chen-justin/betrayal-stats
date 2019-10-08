import "../styles/StatDisplay.scss";
import React, { createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface StatDisplayProps {
  statName: string;
  statValues: number[];
  startValue: number;
  currIndex: number;
  onChange(stat: number): void;
}
const StatDisplay: React.FC<StatDisplayProps> = props => {
  const { statName, statValues, startValue, currIndex } = { ...props };
  const stat = statValues[currIndex];
  return (
    <div className="CharacterStat">
      <div className="CharacterStatTitle">{`${statName}: ${stat}`}</div>
      <div className="Character-StatValues-Container">
        <button
          className="CharacterStatButton"
          onClick={() => {
            if (currIndex > 0) props.onChange(currIndex - 1);
          }}
        >
          -
        </button>
        <div className="CharacterStatValues">
          {statValues.map((val, idx) => {
            return (
              <div
                className={classNames({
                  CharacterStatValue: true,
                  CharacterStatStart: idx === startValue,
                  CharacterCurrStat: idx === currIndex
                })}
              >
                {idx === 0 && <FontAwesomeIcon icon={faSkull} />}
                {idx !== 0 && val}
              </div>
            );
          })}
        </div>
        <button
          className="CharacterStatButton"
          onClick={() => {
            if (currIndex < statValues.length - 1)
              props.onChange(currIndex + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default StatDisplay;

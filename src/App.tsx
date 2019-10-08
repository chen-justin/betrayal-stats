import React from "react";
import "./styles/App.scss";
import * as betrayalData from "./betrayal.json";
import CharacterCard from "./components/CharacterCard";

const App: React.FC = () => {
  const characters = betrayalData["characters"];
  return (
    <div className="App">
      <img src={require("./assets/crow.svg")} />
      {Object.entries(characters).map(([key, value]) => {
        return <CharacterCard key={key} char={value[0]} charAlt={value[1]} />;
      })}
    </div>
  );
};

export default App;

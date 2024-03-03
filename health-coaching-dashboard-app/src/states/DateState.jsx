import { useState } from "react";

const DateState = () => {
  const [globalDate, setGlobalVariable] = useState("Initial Value");

  const updateGlobalVariable = (newValue) => {
    setGlobalVariable(newValue);
  };

  return [globalDate, updateGlobalDate];
};
// did not do anything with this yet ----------------------------------------------------

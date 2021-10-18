import React, { useState } from "react";
import { Context } from "./Context";
import { Routes } from "./routes";
export const RecordsApp = () => {
  const [records, setRecords] = useState([
    { name: "Octavarium", band: "Dream Theater" },
    { name: "Killing the dragon", band: "Dio" },
  ]);
  const [bands, setBands] = useState([
    { name: "Dream Theater", country: "US" },
    { name: "Iron Maiden", country: "UK " },
  ]);
  return (
    <Context.Provider
      value={{
        records,
        setRecords,
        bands,
        setBands,
      }}
    >
      <Routes />
    </Context.Provider>
  );
};

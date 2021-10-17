import React, { useState } from "react";
import { Context } from "./Context";
import { RecordsList } from "./RecordsList";
export const RecordsApp = () => {
  const [records, setRecords] = useState([
    { name: "Octavarium", band: "Dream Theater" },
    { name: "Killing the dragon", band: "Dio" },
  ]);
  return (
    <Context.Provider
      value={{
        records,
        setRecords,
      }}
    >
      <RecordsList />
    </Context.Provider>
  );
};

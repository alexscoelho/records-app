import React, { useContext } from "react";
import { Context } from "./Context";

export const RecordsList = () => {
  const { records } = useContext(Context);
  return (
    <div>
      <h1>Records</h1>
      <hr />

      <ol>
        {records.map((record, index) => (
          <li key={index}>
            {record.name} - <strong>{record.band}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

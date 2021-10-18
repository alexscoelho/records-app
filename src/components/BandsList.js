import React, { useContext } from "react";
import { Context } from "./Context";
export const BandsList = () => {
  const { bands } = useContext(Context);
  return (
    <div>
      <h1>Bands</h1>
      <hr />

      <ol>
        {bands.map((band, index) => (
          <li key={index}>
            {band.name} - <strong>{band.country}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

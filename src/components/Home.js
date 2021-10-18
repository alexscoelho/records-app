import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Explore</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to='/bands'>Bands</Link>
          </li>
          <li>
            <Link to='/records'>Records</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

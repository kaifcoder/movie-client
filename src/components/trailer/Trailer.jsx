import { useParams } from "react-router-dom";
import "./Trailer.css";

import React from "react";
import ReactPlayer from "react-player";

const Trailer = () => {
  let params = useParams();
  let key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}?noreferrer=true`}
          width="100%"
          height="100%"
        />
      ) : (
        <h1>Trailer not available</h1>
      )}
    </div>
  );
};

export default Trailer;

import React from "react";
import "./Contour.css";

function Contour({ title, onNameChange, about, onAboutChange }) {
  return (
    <div className="container d-flex p-3 bg-light rounded border">
      <img
        src="https://se-assignment-2.s3.us-west-2.amazonaws.com/dhoni.jpg"
        className="contour-image rounded border"
        alt={title}
      />
      <div className="d-flex flex-column p-3">
        <div className="mb-2">
          <input
            value={title}
            className="p-1 fs-3 "
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>
        <div>
          <textarea
            rows={5}
            cols={100}
            style={{ resize: "none" }}
            className="p-2 rounded border"
            value={about}
            onChange={(e) => onAboutChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Contour;

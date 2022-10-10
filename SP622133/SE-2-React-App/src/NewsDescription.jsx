import React from "react";

function NewsDescription({ title, content, imageUrl, url }) {
  return (
    <div
      className="container d-flex p-3 bg-white"
      role="button"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="d-flex flex-column px-3">
        <p className="fs-3 fw-normal p-1 rounded text-decoration-none text-black fw-bold">
          {title}
        </p>
        <p className="p-2 fs-5 fw-black rounded">{content}</p>
        <hr></hr>
      </div>
      <div>
        <img
          src={imageUrl}
          alt="News article"
          className="contour-image rounded"
        />
      </div>
    </div>
  );
}

export default NewsDescription;

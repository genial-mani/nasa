import React from "react";
import "../App.css";

const APOD = ({data}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={data.url} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h6 className="card-title">Clicked on: {data.date}</h6>
          <p className="card-text">{data.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default APOD;

import React from "react";
import "../App.css";

const APOD = ({ data }) => {
  console.log(data);
  return (
    <div className="card-container mt-16">
      <div className="card flex flex-col rounded-md">
        <h2 className="text-base text-center p-3">Astronomy Picture of The Day</h2>
        {data.media_type === "video" ? (
          <iframe
            src={data.url}
            className="video-top"
            title={data.title}
            allowFullScreen
          />
        ) : (
          <img src={data.url} className="card-img-top" alt={data.title} />
        )}
        <div className="card-body mt-5 flex flex-col gap-5">
          <h5 className="card-title">Title: {data.title}</h5>
          <h6 className="card-title">Clicked on: {data.date}</h6>
          <p className="card-text leading-relaxed">{data.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default APOD;

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const apiKey = "Nxv5OJilH0Q6pAbZkFAjniCvNFE0hiPXI9Y1ldfU ";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const fetchData = async () => {
      const res = await fetch(url);
      const result = await res.json();
      setdata(result);
      console.log(result);
    };

    fetchData();
  }, []);

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
}

export default App;

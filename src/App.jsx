import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import APOD from "./components/APOD";
import Home from "./components/Home";
import EarthLandsat from "./components/EarthLandsat";
import MarsWeather from "./components/MarsWeather";
import { OrbitSpace } from "orbit-space";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_API_KEY
        }`;
        const res = await fetch(url);
        const result = await res.json();
        setdata(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Router>
      <OrbitSpace>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<APOD data={data} />} />
        <Route path="/earth-landscape" element={<EarthLandsat />} />
        <Route path="/mars-weather-api" element={<MarsWeather />} />
      </Routes>
      </OrbitSpace>
    </Router>
    </>
  );
}

export default App;

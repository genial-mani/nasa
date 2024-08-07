import React, { Suspense, useEffect, useState } from "react";
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import ErrorCompo from "./ErrorCompo";

const EarthLandsat = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    longitude: null,
    latitude: null,
    date: "",
    dim: 0.025,
  });

  useEffect(() => {
    const fetchImage = async () => {
      if (details?.longitude && details?.latitude && details?.date) {
        try {
          const proxyUrl = "https://cors-anywhere.herokuapp.com/";
          const targetUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${parseFloat(
            details?.longitude
          )}&lat=${parseFloat(details?.latitude)}&date=${details?.date}&dim=${
            details?.dim
          }&api_key=${import.meta.env.VITE_API_KEY}`;
          const res = await fetch(proxyUrl + targetUrl);
          if (!res?.ok) {
            throw new Error(`HTTP error! status: ${res?.status}`);
          }
          const result = await res?.json();
          setData(result);
          if (!result?.url) {
            setError("No Images. Try changing the values.");
          }
        } catch (error) {
          setError(error?.message);
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchImage();
  }, [details]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      longitude: e.target.elements[0].value,
      latitude: e.target.elements[1].value,
      date: e.target.elements[2].value,
    });
  };

  return (
    <section className="section-container mt-32 mb-5 px-8 py-5 rounded-md">
      <h2>Landsat Imagery of Earth</h2>
      <div className="div-2">
        <Canvas camera={{ position: [0.9, 0, 0] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={3} />
            <directionalLight position={[0, 0, 0]} />
            <Model path="/public/earth/scene.gltf" />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
      <div className="alert alert-primary mb-5 px-4 py-3" role="alert">
        Note that the returned object may not match the supplied date exactly.
        Instead, the image closest to the supplied date is returned.
      </div>
      <form className="row g-3 flex flex-col gap-5" onSubmit={handleSubmit}>
        {error && <ErrorCompo err={error} />}
        <div className="col-md-6 flex flex-wrap gap-5 items-center">
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input type="text" className="form-control" id="longitude" />
        </div>
        <div className="col-md-6 flex flex-wrap gap-5 items-center">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input type="text" className="form-control" id="latitude" />
        </div>
        <div className="col-md-6 flex flex-wrap gap-5 items-center">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <DatePicker
            className="form-control bg-white overflow-scroll"
            selected={details?.date}
            onChange={(date) => setDetails({ ...details, date })}
            dateFormat="yyyy-MM-dd"
            id="date"
            name="date"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="submit-btn rounded-md">
            Get Image
          </button>
        </div>
      </form>
      <div className="img-div">
        {data?.url && <img className="img" src={data?.url} alt="Earth Imagery" />}
      </div>
    </section>
  );
};

export default EarthLandsat;

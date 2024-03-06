import React, { useEffect, useState } from "react";
import "../App.css";

const EarthLandsat = () => {
  const [data, setdata] = useState([]);
  // const defaultDate = new Date();
  // const defaultDateValue = defaultDate.toISOString().split('T')[0];
  const [details, setDetails] = useState({
    longitude: null,
    latitude: null,
    date: "",
    dim: 0.025,
  });

  useEffect(() => {
    try {
      const fetchImage = async () => {
        let url = `https://api.nasa.gov/planetary/earth/assets?lon=${parseFloat(
          details.longitude
        )}&lat=${parseFloat(details.latitude)}&date=${details.date}&dim=${
          details.dim
        }&api_key=${import.meta.env.VITE_API_KEY}`;
        let result;
        if (details.longitude != null) {
          const res = await fetch(url);
          result = await res.json();
          console.log(result);
          setdata(result);
        }
        
      };

      fetchImage();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [details]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements[0]);
    setDetails({
      ...details,
      longitude: e.target.elements[0].value,
      latitude: e.target.elements[1].value,
      date: e.target.elements[2].value,
    });
  };
  return (
    <section className="section-container">
      <h2>Landsat Imagery of Earth</h2>
      <div className="alert alert-primary" role="alert">
        Note that the returned object may not match the supplied date exactly.
        Instead, the image closest to the supplied date is returned.
      </div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input type="text" className="form-control" id="longitude" />
        </div>
        <div className="col-md-6">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
          <input type="text" className="form-control" id="latitude" />
        </div>
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input type="text" className="form-control" id="date" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Get Image
          </button>
        </div>
      </form>
      <div className="img-div">
        <img className="img" src={data.url} />
      </div>
    </section>
  );
};

export default EarthLandsat;

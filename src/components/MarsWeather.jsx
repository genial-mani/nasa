import React, { useEffect, useState } from "react";

const MarsWeather = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchUrl = async () => {
        const url = `https://api.nasa.gov/insight_weather/?api_key=${
          import.meta.env.VITE_API_KEY
        }&feedtype=json&ver=1.0`;
        const res = await fetch(url);
        const result = await res?.json(); 
        setData(result);
        console.log(data);
      };

      fetchUrl();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  return (
    <section className="home-section">
      <div></div>
    </section>
  );
};

export default MarsWeather;

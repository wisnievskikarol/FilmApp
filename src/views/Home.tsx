import React, { useState, useEffect } from "react";
import { getPopular } from "../API/RequestsAPI";
import Hero from "../components/Hero";
import Popular from "../components/Popular";

const Home = () => {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    getPopular().then((r) => setPopularData(r));
  }, []);

  return (
    <div>
      <Hero data={popularData} />
      <Popular />
    </div>
  );
};

export default Home;

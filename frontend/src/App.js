import React, { useState, useEffect } from "react";

const App = () => {
  const [day, setDay] = useState("");
  useEffect(() => {
    fetch("/api/day")
      .then((response) => response.json())
      .then((response) => setDay(response));
  }, []);
  return <h1>Hey!{day}</h1>;
};

export default App;

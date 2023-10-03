import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [showFlags, setShowFlags] = useState(false);

  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((country) => {
    return country.name.common.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(event) => {
          setQuery(event.target.value);
          setShowFlags(false); // Hide flags when the user types a new query
        }}
      />
      <button onClick={() => setShowFlags(true)}>Search</button>
      {showFlags && filteredData.map((country) => {
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <img
              src={country.flags.png}
              alt="Flag"
              width={200}
              height={100}
            />
          </div>
        })
      }
    </div>
  );
}

export default App;
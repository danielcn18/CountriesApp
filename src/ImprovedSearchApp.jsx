import React, { useState, useEffect } from "react";
import "./app.css";

function ImprovedSearchApp() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [countryInfo, setCountryInfo] = useState(null);

    const fetchData = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json)
            .then((result) => {
                setData(result);
                console.log(result);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const searchCountry = () => {
        const foundCountry = data.find((country) => {
            country.name.common.toLowerCase().includes(query.toLowerCase());
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a country..."
                onChange={(event) => setQuery(event.target.value)}
            />
            <button onClick={searchCountry}>Search</button>
            {countryInfo && (
                <div>
                    <h1>{countryInfo.name.common}</h1>
                    <img
                        src={countryInfo.flags.png}
                        alt="Flag"
                        width={200}
                        height={100}
                    />
                </div>
            )}
        </div>
    );
}

export default ImprovedSearchApp;
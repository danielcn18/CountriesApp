import React, { useState, useEffect } from "react";
import "./app.css";

function SearchApp() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

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

    return (
        <div>
            <input 
            type="text"
            placeholder="Enter Name of The Country"
            onChange={(event) => setQuery(event.target.value)}
            />
            
            { data
                .filter((res) => {
                    if(query === "") {
                        return true;
                    } else if (
                        res.name.common.toLowerCase().includes(query.toLowerCase())
                    ) {
                        return true;
                    }
                    return false; // Add a default return statement for the filter function 
                })

                .map((res) => {
                    return (
                        <div key={res.name.common}>
                            <h1>{res.name.common}</h1>
                            <img src={res.flags.png} alt="logo" width={200} height={100} />
                        </div>
                    ) 
                })

                // or (shorthand for returning html): 
                // .map((res) => (
                //     <div key={res.name.common}>
                //         <h1>{res.name.common}</h1>
                //         <img src={res.flags.png} alt="logo" width={200} height={100} />
                //     </div>
                // ))
            }
        </div>
    );
}

export default SearchApp;
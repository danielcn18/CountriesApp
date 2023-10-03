// This line imports the necessary modules and functions from React, specifically useState and useEffect. 
// These are React hooks used for managing state and performing side effects in functional components. 
import React, { useState, useEffect } from "react";

// This line defines a functional component named Countries
function Countries() {
    // This line initializes a state variable named data using the useState hook. 
    // The data variable is initialized as an empty array, and setData is a function to update this state. 
    const [data, setData] = useState([]);

    // This defines a function named fetchData. 
    // This function will be responsible for making an HTTP request to fetch data from the REST API.
    const fetchData = () => {
        // This line initiates an HTTP GET request to the specified URL, which is an API that provides information about all countries in the world. 
        fetch("https://restcountries.com/v3.1/all")
            // This is a promise chain that handles the resoinse from the API. 
            // It uses the .json() method to parse the response body into JSON formet. 
            .then((res) => res.json())
            // This part of the promise chain handles the parsed JSON data received from the API. 
            // It sets the data state variable to this data and also logs the result to the console. 
            .then((result) => {
                setData(result);
                console.log(result);
            });
    };

    // This is a React useEffect hook. It is used to perform side effects in functional components. 
    // In this case, it is called with an empty dependency array [], meaning it will run only once when the component mounts.  
    useEffect(() => {
        // Inside the useEffect function, it calls the fetchData function. 
        // This means that when the component is first mounted, it will trigger the fetchData function to make the API request.
        fetchData();
    }, []);

    return (
        // This is the JSX portion of the component, where it defines the structure of the rendered output. It contains a <div> element. 
        <div>
            {/* Inside the <div>, it uses the data state variable and the map function to loop through each item in the array (which contains country information) */}
            {data.map((res) => (
                <h3>{res.name.common}</h3>
            ))}
        </div>
    );
}

// It exports the Countries component as the default export, making it available for use in other parts of the application.
export default Countries;
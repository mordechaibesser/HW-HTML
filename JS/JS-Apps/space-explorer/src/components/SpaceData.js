import React, { useState, useEffect } from "react";
import spaceData from "../data/SpaceData";

const SpaceData = ({ objectType }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Fetching data for:", objectType); // Log the object type being fetched
        const fetchData = async () => {
            const result = spaceData[objectType]; // Get the data for the selected type
            console.log("Fetched data:", result); // Log the fetched data
            setData(result || []); // Update the state with the fetched data
        };

        fetchData();
    }, [objectType]); // Re-run this effect whenever objectType changes

    return (
        <div>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <img src={item.image} alt={item.title} style={{ width: "80%" }} />
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SpaceData;

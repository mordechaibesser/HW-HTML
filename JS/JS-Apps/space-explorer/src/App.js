import React, { useState } from "react";
import ObjectSelector from "./components/ObjectSelector";
import SpaceData from "./components/SpaceData";

const App = () => {
    const [objectType, setObjectType] = useState("planet");

    console.log("Object Type in App:", objectType); // Log the current objectType

    return (
        <div>
            <h1>Space Explorer</h1>
            <ObjectSelector onSelect={setObjectType} />
            <SpaceData objectType={objectType} />
        </div>
    );
};

export default App;

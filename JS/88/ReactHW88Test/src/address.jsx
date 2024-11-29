import React from 'react';

function Address({ street, city, state, zip }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Address:</h2>
      <p>{street}</p>
      <p>{city}, {state} {zip}</p>
    </div>
  );
}

export default Address;

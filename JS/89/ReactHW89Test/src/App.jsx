import React from 'react';
import Address from './Address';

function App() {
  const welcomeMessage = "Welcome to our address book!";

  return (
    <div>
      <h1>{welcomeMessage}</h1>
      <p>This is a simple React application to display an address.</p>

      
      <Address 
        street="153 Somerset Ave" 
        city="Lakewood" 
        state="NJ" 
        zip="08701" 
      />
    </div>
  );
}

export default App;

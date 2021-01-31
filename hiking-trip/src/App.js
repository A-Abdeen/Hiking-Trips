import "./App.css";
import TripList from "./components/TripList.js";
import trips from "./trips.js";
import React, { useState } from "react";

function App() {
  const [trip, setTrip] = useState(null);
  return (
    <div className="App">
      <header className="App-header"></header>
      <TripList trips={trips} setTrip={setTrip} />
    </div>
  );
}

export default App;

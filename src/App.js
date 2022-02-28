import React from "react";
import "./App.css"

function App() {
  return ( 
    <div className="App">
      <header>WorldWide Frames</header>
      <button>frame set 1</button>
      <button>frame set 2</button>
      <button>frame set 3</button>
      <button>frame set 4</button>
      <button>frame set 5</button>
      <div className="Topright">
        <button style={{backgroundColor: "lightblue"}}>Shopping Cart</button>
      </div>
    </div>
  );
}

export default App;
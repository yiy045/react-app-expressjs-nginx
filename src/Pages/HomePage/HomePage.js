import "./HomePage.css"
function Home() {
    return (
      <div>
          <div className="App">
          <header>WorldWide Frames</header>
          <button>frame set 1</button>
          <button>frame set 2</button>
          <button>frame set 3</button>
          <button>frame set 4</button>
        </div>
        <div className="Topright">
          <button style={{backgroundColor: "lightblue"}}>Shopping Cart</button>
        </div>
      </div>
      
    );
}

export default Home;
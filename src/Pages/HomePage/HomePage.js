import "./HomePage.css"
function Home() {
    return (
      <div>
          <div className="App">
          <header><b>WorldWide Frames</b> - <i>See A Better World</i></header>
          <h2><i>Items on Sale</i></h2>
          <h3>Deals of the Day</h3>
          <button>frame set 1</button>
          <button>frame set 2</button>
          <button>frame set 3</button>
          <h3>Sunglasses</h3>
          <button>frame set 4</button>
          <button>frame set 5</button>
        </div>
        <div className="Topright">
          <button style={{backgroundColor: "lightblue"}}>Shopping Cart</button>
        </div>
      </div>
      
    );
}

export default Home;
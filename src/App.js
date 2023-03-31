import Home from "./components/Home";
import Items from "./components/Items";

function App() {
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <h1>React With Go Sandbox</h1>
        </div>
        <div className="col text-end">
          <a href="">
            <span className="badge bg-success">Login</span>
          </a>
        </div>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <a href="/" className="list-group-item list-group-item-action">
                Home
              </a>
              <a href="" className="list-group-item list-group-item-action">
                Items
              </a>
              <a href="" className="list-group-item list-group-item-action">
                catagories
              </a>
              <a href="" className="list-group-item list-group-item-action">
                add items
              </a>
              <a href="" className="list-group-item list-group-item-action">
                Manage Catalogue
              </a>
              <a href="" className="list-group-item list-group-item-action">
                GraphQl
              </a>
            </div>
          </nav>
        </div>
        <div className="col-md-10 ">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

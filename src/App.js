
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";


function App() {
  const [jwtToken, setJwtToken] = useState("");
  
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <h1>React With Go Sandbox</h1>
        </div>
        <div className="col text-end">
         {jwtToken ===""          
        ? <Link to="/Login">
            <span className="badge bg-success">Login</span>
          </Link>
        : <Link to="#!">
            <span className="badge bg-danger">Logout</span>
          </Link>
        }
        </div>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link to="/Categories" className="list-group-item list-group-item-action">
                Categories
              </Link>
              <Link to="/Items" className="list-group-item list-group-item-action">
                Items
              </Link>
              {jwtToken !=="" &&
              <>
              <Link to="/admin/addItems/0" className="list-group-item list-group-item-action">
                Add Items
              </Link>
              <Link to="/Admin" className="list-group-item list-group-item-action">
                Manage Catalogue
              </Link>
              <Link to="/GraphQl" className="list-group-item list-group-item-action">
                GraphQl
              </Link>
              </>
              }
            </div>
          </nav>
        </div>
        <div className="col-md-10 ">
          <Outlet />
          
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manatee from "../Manatee/manatee";
import Whale from "../Whale/Whale";
import Narwhal from "../Narwhal/Narwhal";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Marine Mammals</h1>

        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/manatee">Manatee</Link>
              </li>
              <li>
                <Link to="/whale">Whale</Link>
                <li>
                  <Link to="/narwhal">Narwhal</Link>
                </li>
              </li>
              <li>
                <Link to="/whale/beluga">Beluga Whale</Link>
              </li>
              <li>
                <Link to="/whale/blue">Blue Whale</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/whale" element={<Whale></Whale>} />
            <Route path="/whale/:type" element={<Whale></Whale>} />
            <Route path="/narwhal" element={<Narwhal></Narwhal>} />
            <Route path="/manatee" element={<Manatee></Manatee>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

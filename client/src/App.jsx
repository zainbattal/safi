import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Links,
} from "react-router-dom";
import Home from "./home";
import Dashboard from "./Dashboard";

import "./App.css";

import logo from "./assets/logo.png";
function App() {
  return (
    <Router>
      <nav className="nav">
        <div className="nav-Btns">
          <Link to="/">
            <img
              className="logo"
              src={logo}
              style={{ width: "75px" }}
              alt="logo"
            />
          </Link>

          <Link to="/" className="navBtn">
            Home
          </Link>
          <Link to="/designs" className="navBtn">
            Designs
          </Link>
          <Link
            to="https://www.instagram.com/zain.cards?igsh=YmU0NXlkaTgwbnQz"
            className="navBtn"
          >
            Instagram
          </Link>
          <Link
            to="https://www.facebook.com/share/1YycEDivJb/"
            className="navBtn"
          >
            Facebook
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

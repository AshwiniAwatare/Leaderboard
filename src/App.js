import "./App.css";
import Age from "./components/Age";
import Leaderboard from "./components/Leaderboard";
import Name from "./components/Name";
import Points from "./components/Points";
import Rank from "./components/Rank";
import Table from "./components/Table";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="text-center buttons">
        <header className="text-center">
        </header>
        <div className="text-center buttons">
          <Router>
          <Leaderboard></Leaderboard>

            <Routes>
            <Route path="/" element={<Name />} />
              <Route path="/name" element={<Name />} />
              <Route path="/points" element={<Points />} />
              <Route path="/age" element={<Age />} />
              <Route path="/rank" element={<Rank />} />
            </Routes>
          </Router>
        </div>
       
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { userData } from "../data";
import { Link } from "react-router-dom";

function Table() {
  const [data, setData] = useState(userData);

  const hanldeSorting = (order) => {
    const newdata = [...data].sort((a, b) => (a[order] < b[order] ? -1 : 1));
    console.log("sorting");
    setData(newdata);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => hanldeSorting("rank")}>
            <Link to="/rank">Rank</Link>
          </li>
          <li onClick={() => hanldeSorting("points")}>
            <Link to="/points">Points</Link>
          </li>
          <li onClick={() => hanldeSorting("name")}>
            <Link to="/name">Name</Link>
          </li>
          <li onClick={() => hanldeSorting("age")}>
            <Link to="/age">Age</Link>
          </li>
        </ul>
      </nav>
      <table className="table table-striped">
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <td key={item.id}>{item.rank}</td>
                  <td key={item.id}>{item.points}</td>
                  <td key={item.id}>{item.name}</td>
                  <td key={item.id}>{item.age}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import { useState } from "react";
import AddedCard from "./components/AddedCard";
import NameCard from "./components/NameCard";

function App() {
  const [data, setData] = useState([]);

  const addName = newdata => {
    const newData = [newdata];
    setData(newData);
  };

  return (
    <div className="App">
     {data.length > 0 ? <AddedCard data={data} /> : <NameCard onSubmit={addName} />}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";

// COMPONENTS
import { Layout } from "./components/Integrated/Layout";

function App() {
  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:5000/api/v1/employees")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.error(e));
    };

    getData();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;

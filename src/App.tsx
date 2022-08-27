import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// COMPONENTS
import { Layout } from "./components/Integrated/Layout";

// ROUTES
import { CandidatesPage } from "./pages/CandidatesPage";

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CandidatesPage />} />
      </Route>
    </Routes>
  );
}

export default App;

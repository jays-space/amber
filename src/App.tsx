import { Routes, Route } from "react-router-dom";

import "./App.css";

// COMPONENTS
import { Layout } from "./components/Integrated/Layout";

// ROUTES
import { CandidatesPage } from "./pages/CandidatesPage";
import { CandidatePage } from "./pages/CandidatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CandidatesPage />} />
        <Route path="/:candidate" element={<CandidatePage />} />
      </Route>
    </Routes>
  );
}

export default App;

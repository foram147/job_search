import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import JobSearch from "./components/JobSearch";
import Favorites from "./components/Favorites";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/:companyName" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

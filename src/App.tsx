import { Routes, Route } from "react-router-dom";
import University from "./pages/University";
import Work from "./pages/Work";
import Personal from "./pages/Personal";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/university" element={<University />} />
          <Route path="/work" element={<Work />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;

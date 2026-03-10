import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scroll from "./pages/Scroll";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scroll />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

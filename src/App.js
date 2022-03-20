import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShoeDetailPage from "./pages/shoeDetail/shoedetail.component";

function App() {
  return (
    <div>
      <Link to={`/sneakers/5`}>Sneaker 1</Link>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/sneakers/:sneakerId" element={<ShoeDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

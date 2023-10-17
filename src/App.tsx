import "./App.css";
import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sheet } from "./pages/sheet.";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sheet1" element={<Sheet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import Detalhes from "../Detalhes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element= {<Detalhes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

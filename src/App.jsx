import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Components/Category";
// import Pages from "./Pages/Pages";
import Home from "./Pages/Home";
import Cuisine from "./Pages/Cuisine";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Category/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

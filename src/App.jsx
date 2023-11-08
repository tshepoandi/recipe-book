import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Components/Category";
// import Pages from "./Pages/Pages";
import Home from "./Pages/Home";
import Cuisine from "./Pages/Cuisine";
import Search from "./Components/Search";
import Searched from "./Components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Search/>
        <Category/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
          <Route path="/searched/:search" element={<Searched/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

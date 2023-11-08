import { BrowserRouter } from "react-router-dom";
import Category from "./Components/Category";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;

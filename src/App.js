import "./App.css";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import SimpleCounter from "./SimpleCounter";
import UseContextCounter from "./UseContextCounter";
import ReduxCounter from "./ReduxCounter";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="simplecounter" element={<SimpleCounter />} />
        <Route path="usecontextcounter" element={<UseContextCounter />} />
        <Route path="reduxcounter" element={<ReduxCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

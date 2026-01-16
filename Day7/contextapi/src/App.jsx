import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import HTML from "./pages/HTML.jsx";
import JavaScript from "./pages/JavaScript.jsx";
import mycontext from "./store/mycontext.js";
export default function App() {
  let user = "Ameen";
  let phone="9159098909"
  return (
    <div>
      <mycontext.Provider value={{ user, phone }}>
        <Routes>
          {/* <Route path="/" element={<Home username={user} />} />
          <Route path="/html" element={<HTML username={user} />} />
          <Route path="/js" element={<JavaScript username={user} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/js" element={<JavaScript />} />
        </Routes>
      </mycontext.Provider>
    </div>
  );
}

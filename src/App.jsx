import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Books from "./pages/Books";
import Events from "./pages/Events";
import Press from "./pages/Press";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Bio" element={<Bio />} />
        <Route path="Books" element={<Books />} />
        <Route path="Events" element={<Events />} />
        <Route path="Press" element={<Press />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

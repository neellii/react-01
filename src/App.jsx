import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./assets/vars.scss";
import "./App.scss";

import Intro from "./pages/intro/Intro";
import Opened from "./pages/opened/Opened";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Intro />} />
          <Route path="/opened" element={<Opened />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

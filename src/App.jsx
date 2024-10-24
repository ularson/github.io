import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import GMEQ1 from "./Pages/GMEQ1";
import GMComp1 from "./Pages/GMComp1";
import GMSQ1 from "./Pages/GMSQ1";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="gmeq1" element={<GMEQ1 />} />
          <Route path="gmcomp1" element={<GMComp1 />} />
          <Route path="gmsq1" element={<GMSQ1 />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Stories from "./components/pages/Stories";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import NoPage from "./components/pages/NoPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;

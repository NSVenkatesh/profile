import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App box-border">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 flex flex-col sm:flex-row">
            {/* Main content area */}
            <main className="flex-1 ml-0 sm:ml-64 transition-all duration-300">
              <Routes>
                <Route path="/profile" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

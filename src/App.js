import "./App.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App box-border">
      <Router basename="/">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 flex flex-col sm:flex-row">
            <main className="flex-1 ml-0 sm:ml-64 transition-all duration-300">
              <Routes>
                {/* <Route path="/" element={<Navigate to="/" />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
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

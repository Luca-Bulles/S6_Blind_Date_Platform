import Navbar from './components/Navbar'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import QandA from './pages/QandA';
import Blog from './pages/Blog';


function App() {
  return (
    <div className="App flex justify-between items-center flex-col min-h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/question" element={<QandA />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

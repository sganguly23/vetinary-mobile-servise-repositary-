import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import VetDashboard from "./pages/VetDashboard";
import UploadRecords from "./pages/UploadRecords";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/dashboard" element={<VetDashboard />} />
        <Route path="/upload" element={<UploadRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
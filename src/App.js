import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MovieListPage from "./pages/MovieListPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import './App.css';

function App() {
    return(
        <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/movies" element={<MovieListPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />           
        </Routes>
        </Router>
  )
}

export default App;

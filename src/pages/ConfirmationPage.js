import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};

  return (
    <div className="confirmation-container">

      <div className="icon-background">
        <div className="icon icon1">🎬</div>
        <div className="icon icon2">🍿</div>
        <div className="icon icon3">🎶</div>
        <div className="icon icon4">🍕</div>
      </div>

      <h2>🎉 Booking Confirmed!</h2>
      {bookingDetails && (
        <div className="confirmation-details">
          <p><strong>Name:</strong> {bookingDetails.name}</p>
          <p><strong>Movie:</strong> {bookingDetails.movie_title}</p>
          <p><strong>Showtime:</strong> {bookingDetails.showtime}</p>
          <p><strong>Seats:</strong> {bookingDetails.seats}</p>
          <p><strong>Payment:</strong> {bookingDetails.payment_method}</p>
        </div>
      )}
      <button onClick={() => navigate("/movies")}>Back to Movies</button>
    </div>
  );
}

export default ConfirmationPage;

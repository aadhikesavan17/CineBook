import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieTitle, time } = location.state;

  const rows = 8;
  const cols = 10;
  const totalSeats = rows * cols;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("User not logged in!");
      return;
    }

    navigate("/payment", {
      state: {
        movieTitle,
        time,
        selectedSeats,
        userId: user.id,
      },
    });
  };

  return (
    <div className="booking-container">
      <h2>
        {movieTitle} - {time}
      </h2>

      <div className="screen">
        <p>🎥 SCREEN</p>
      </div>

      <div className="seats">
        {[...Array(totalSeats)].map((_, index) => {
          const seatNumber = index + 1;
          const isSelected = selectedSeats.includes(seatNumber);
          return (
            <div
              key={seatNumber}
              className={`seat ${isSelected ? "selected" : ""}`}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      <button className="book-btn" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}

export default BookingPage;


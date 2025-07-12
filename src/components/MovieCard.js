import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ title, poster, duration, language, showtimes }) {
  const navigate = useNavigate();

  function handleShowtimeClick(time) {
    navigate("/booking", { state: { movieTitle: title, time } });
  }

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>⏱ {duration}</p>
      <p>🌐 {language}</p>
      <div className="showtimes">
        {showtimes.map((time, idx) => (
          <button key={idx} onClick={() => handleShowtimeClick(time)}>
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;

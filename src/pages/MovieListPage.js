import React from "react";
import MovieCard from "../components/MovieCard";
import "./MovieListPage.css";

    const movies = [
        {
             id: 1,
            title: "Inception",
            poster: require("../asset/inception.png"),
            duration: "2h 28min",
            language: "English",
            showtimes: ["10:00AM", "1:00PM", "6:00PM", "11.00PM"]
        },

        {
             id: 2,
            title: "Harry Potter",
            poster: require("../asset/harry-potter.png"),
            duration: "2h 54min",
            language: "English",
            showtimes: ["10:00AM", "1:00PM", "6:00PM", "11.00PM"]
        },

        {
             id: 3,
            title: "Interstellar",
            poster: require("../asset/interstellar.png"),
            duration: "2h 49min",
            language: "English",
            showtimes: ["10:00AM", "1:00PM", "6:00PM", "11.00PM"]
        },

        {
             id: 4,
            title: "After",
            poster: require("../asset/after.png"),
            duration: "1h 46min",
            language: "English",
            showtimes: ["10:00AM", "1:00PM", "6:00PM", "11.00PM"]
        },

        {
             id: 5,
            title: "The Lord of Rings",
            poster: require("../asset/LordOfRings.png"),
            duration: "1h 46min",
            language: "English",
            showtimes: ["10:00AM", "1:00PM", "6:00PM", "11.00PM"]
        },

        {
             id: 6,
            title: "The Conjuring",
            poster: require("../asset/conjuring.png"),
            duration: "1h 46min",
            language: "English",
            showtimes: ["10:00AM", "1:00PM", "6:00PM", "11.00PM"]
        }
    ]

    function MovieListPage() {
        return (
            <div className="movie-list-page">
                <h2>Select a Movie</h2>
                <div className="movie-grid">
                    {movies.map((movie,index)=>(
                        <MovieCard
                            key = {index}
                             title={movie.title}
                            poster={movie.poster}
                            duration={movie.duration}
                            language={movie.language}
                            showtimes={movie.showtimes}
                        />
                    ))}
                </div>
            </div>
        );
}

export default MovieListPage;
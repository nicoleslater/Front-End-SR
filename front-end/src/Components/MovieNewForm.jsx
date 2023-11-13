import { useState } from "react";
import {useNavigate} from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL

function MovieNewForm(){
 const navigate = useNavigate();
 const [movie, setMovie] = useState({
        title: "", 
        url: "",
        released: "", 
        director: "", 
        genre: "", 
        rated: "", 
        is_favorite: false, 
        imdb_Ratings: 0
 });

 const addMovie = () => {
    fetch(`${API}/movies`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(() => {
        navigate(`/movies`);
    })
    .catch((error) => console.error("catch", error))
 };

 const handleTextChange = (event) => {
    setMovie({...movie, [event.target.id]: event.target.value});
 };

 const handleCheckboxChange = () => {
    setMovie({...movie, is_favorite: !movie.is_favorite});
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    addMovie();
 };
 return (
    <div className="New">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                id="title"
                value={movie.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Title of the Movie..."
                required
                />
                <label htmlFor="url">URL:</label>
                <input 
                id="url"
                type="text"
                pattern="http[s]*//.+"
                required
                value={movie.url}
                placeholder="http://"
                onChange={handleTextChange}
                />
                <label htmlFor="genre">Genre:</label>
                <input 
                id="genre"
                type="text"
                name="genre"
                value={movie.genre}
                placeholder="Action, Comedy, ..."
                onChange={handleTextChange}
                />
                <label htmlFor="isFavorite">Favorite:</label>
                <input
                id="isFavorite"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={movie.is_favorite}
                />
                <br />
                <input type="submit" />
                </form>
                </div>
 );
}

export default MovieNewForm;
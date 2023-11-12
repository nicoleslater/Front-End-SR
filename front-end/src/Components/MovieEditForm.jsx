import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;


function MovieEditForm(){
    let {id} = useParams();
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

    const handleTextChange = (event) => {
        setMovie({...movie, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setMovie({...movie, is_favorite: !movie.is_favorite});
    

    const updateMovie = () => {
        console.log(`${API}/movies/${id}`);

        fetch(`${API}/movies/${id}`, {
            method: "PUT",
            body: JSON.stringify(movie), 
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            navigate(`/movies/${id}`);
        })
        .catch((error) => console.error("catch", error));
    
    
    useEffect(() => {
        fetch(`${API}/movies/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((responseJSON) => {
            setMovie(repsonseJSON);
        })
        .catch((error) => console.error(error));
    }, [id]);
}
    const handleSubmit = (event) => {
        event.preventDefault();
        updateMovie();
    
}
    return(
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                id="title"
                value={movie.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Davon & Nicole's Favorite Movies"
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
                {/* <label htmlFor="description">Description:</label>
                <textarea 
                id="description"
                name="description"
                value={movie.description}
                onChange={handleTextChange}
                placeholder="Why is this movie considered your favorite?"
                />
                <br /> */}

                <input type="submit" />
                </form>
                <Link to={`/movies/${id}`}>
                    <button>No, Thank You!</button>
                </Link>
        </div>
    );
}
}
export default MovieEditForm;
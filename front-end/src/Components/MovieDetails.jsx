import { useState, useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Favorites from "./Favorites"

const API = import.meta.env.VITE_BASE_URL

function MovieDetails(){
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/movies/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setMovie(responseJSON)
        })
        .catch(error => console.log(error))
    }, [id, API])

    const handleDelete = () => {
        deleteMovie()
    }

    const deleteMovie = () => {
        const httpOptions = { method: "DELETE"}
        fetch(`${API}/movies/${id}`, httpOptions)
        .then(() =>  navigate(`/movies`))
        .catch(error => console.log(error)) 
    }

    return (
        <article>
            <h3>{true ? <span>🍿</span> : null}</h3>
            <h5>
                <span>
                    <a href={movie.url}>{movie.title}</a>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp; {movie.url}
            </h5>
            <h6>{movie.genre}</h6>
            <h6>{movie.rated}</h6>
                <div className="showNavigation">
                    <div>
                        <Link to={`/movies`}>
                            <button>Back</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/movies/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <Favorites />
        </article>
    );

    }
export default MovieDetails;
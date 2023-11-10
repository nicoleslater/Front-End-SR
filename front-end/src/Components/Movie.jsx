import {Link} from "react-router-dom";

function Movie({movie}){
return (
    <tr>
        <td> 
            {movie.is_favorite ? (
                <span>🍿</span>
            ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
            )}
        </td>
        <tdc style={{cursor: "alias"}}>
        <a href={movie.released} target="_blank" rel="noreferrer">
            {movie.title}
        </a>
            </td>
            <td>
                <Link to={`/movies/${movie.id}`}>🎥</Link>
            </td>
    </tr>
);
}

export default Movie;



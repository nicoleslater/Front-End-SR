import {Link} from "react-router-dom";

function Movie({ movie }){
return (
    <tr>
        <td> 
            {movie.is_favorite ? (
                <span>🍿</span>
            ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
            )}
        </td>
        <td style={{cursor: "alias"}}>
        <a href={movie.url} target="_blank" rel="noreferrer">
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



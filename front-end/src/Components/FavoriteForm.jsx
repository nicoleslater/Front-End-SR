import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function FavoriteForm({ favoriteDetails, handleSubmit, toggleView, children }){
    let {id} = useParams();

    const [favorite, setFavorite] = useState({
        title: "",
        notes:"",
        rating: 0,
        movie_id: id
    });

    const handleTextChange = (event) => {
        setFavorite({...favorite, [event.target.id]: event.target.value})
    };

    useEffect(() => {
        if(favoriteDetails){
            setFavorite(favoriteDetails);
        }
    }, [id, favoriteDetails]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(favorite, id); 
        if(favoriteDetails){
            toggleView();
        }
        setFavorite({
            title:"",
            notes:"",
            rating: 0,
            movie_id: id,
        });
        console.log(movies);
    };

return (
    <div className="Edit">
        {children}
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input
            id="title"
            value={favorite.title}
            type="text"
            onChange={handleTextChange}
            placeholder="Title of Movie..."
            required
            />
            <label htmlFor="rating">Rating:</label>
            <input 
            id="rating"
            type="number"
            min="0"
            max="10"
            step="1"
            required
            placeholder="Please enter value between 0 and 10"
            value={favorite.rating}
            onChange={handleTextChange}
            />
            <label htmlFor="notes">Notes:</label>
            <textarea
            id="notes"
            type="text"
            name="notes"
            value={favorite.notes}
            placeholder="Honest opinion on the movie..."
            onChange={handleTextChange}
            />

            <br />
            <input type="submit" />
        </form>
    </div>
);
}

export default FavoriteForm;


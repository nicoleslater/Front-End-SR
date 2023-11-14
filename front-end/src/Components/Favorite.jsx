import {useState} from "react";
import FavoriteForm from "./FavoriteForm";

function Favorite({ favorite, handleDelete, handleEdit}){
    const [viewEditForm, setEditForm] = useState(false);
    const toggleView = () => {
        setEditForm(!viewEditForm);
    };

    return(
        <div className="Favorite">
            {viewEditForm ? (
                <>
                <FavoriteForm
                favoriteDetails={favorite}
                toggleView={toggleView}
                handleSubmit={handleEdit}
                />
                <button onClick={toggleView}>
                    {viewEditForm ? "Cancel" : "Edit this favorite"}
                </button>
                </>
            ) : (
                <>
                <h4>
                   {favorite.title}
                   <span>{favorite.notes}</span>
                </h4>
                <h5>{favorite.rating}</h5>
                <p>{favorite.movie_id}</p>
                <button onClick={toggleView}>
                    {viewEditForm ? "Cancel" : "Edit this favorite" }
                </button>
                <button onClick={() => handleDelete(favorite.id)}>Delete</button>
            </>
            )}
        </div>
    );
}

export default Favorite;
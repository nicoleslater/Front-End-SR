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
                favoriteDetails={review}
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
                   
                </h4>
                
                
                
                </>
            )}
        </div>
    )
}
export default Favorite;
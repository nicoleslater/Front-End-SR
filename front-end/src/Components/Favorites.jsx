import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import Favorite from "./Favorite";

import FavoriteForm from "./FavoriteForm";

const API = import.meta.env.VITE_BASE_URL;

function Favorites(){
    const [favorites, setFavorites] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        fetch(`${API}/movies/${id}/favorites`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setFavorites(responseJSON.allFavorites);
        })
        .catch((error) => console.log(error));
    }, [id, API]);


    const handleAdd = (newFavorite) => {
        fetch(`${API}/movies/${id}/favorites`,{
            method: "POST",
            body: JSON.stringify(newFavorite),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            setFavorites([...favorites, responseJSON])
        })
        .catch((error) => console.log(error));
    };

    const handleDelete = (favoriteId) => {
        fetch(`${API}/movies/${id}/movies/${favoriteId}`, {method: "DELETE"})
            
        .then((response) => {
            const deletedFavorite = favorites.find(favorite => favorite.id === favoriteId);
            
            const copiedFavoritesArray = [...favorites];
            copiedFavoritesArray.splice(copiedFavoritesArray.indexOf(deletedFavorite), 1);
            
            setFavorites(copiedFavoritesArray);
        })
        .catch((error) => console.log(error));
    
    };

    const handleEdit = (updatedFavorite) => {
        fetch(`${API}/movies/${id}/favorites/${updatedFavorite.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedFavorite),
            headers: { "Content-Type": "application/json"},
        })
      .then((response) => response.json())
      .then(responseJSON => {
        const copiedFavoriteArray = [...favorites]
        const indexUpdatedFavorite = copiedFavoriteArray.findIndex(favorite => {
            return favorite.id === updatedFavorite.id
        })
        copiedFavoriteArray[indexUpdatedFavorite] = responseJSON
        setFavorites(copiedFavoriteArray)  
        });
    };


return (
        <section className="Favorites">
            <h2>Favorites</h2>
            <FavoriteForm handleSubmit={handleAdd}>
                <h3>Add a New Favorite</h3>
            </FavoriteForm>
            {favorites.map((favorite) => {
                <Favorite key={favorite.id} favorite={favorite} handleDelete={handleDelete} handleEdit={handleEdit} />
            })}
        </section>
    );
}

    export default Favorites;
